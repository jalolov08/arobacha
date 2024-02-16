import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {API_BASE} from '../../../config';
import {decryptData} from '../../utils/decryptData';
import useGetRequest from '../../hooks/useGetRequest';
import styles from './addetails.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import FastImage from 'react-native-fast-image';
import Loader from '../../ui/Loader/loader.ui';
import Icon, {Icons} from '../../ui/Icon/icon.ui';
import {colors} from '../../constants/colors';
import axios from 'axios';
import Button from '../../ui/Button/button.ui';
import Error from '../../ui/Error/error.ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SimilarAds from '../../components/SimilarAds/similarAds.component';
import ImageView from 'react-native-lightbox-gallery';
interface Ad {
  _id: string;
  bodyType: string;
  brand: string;
  city: string;
  color: string;
  condition: string;
  createdAt: string;
  customsCleared: boolean;
  description: string;
  engineCapacity: string;
  fuelType: string;
  mileage: number;
  model: string;
  owner: string;
  photos: string[];
  price: number;
  transmission: string;
  updatedAt: string;
  views: number;
  viewsToday: number;
  year: number;
  category: string;
}

export default function AdDetails() {
  const {
    params: {adId},
  } = useRoute();
  const [ad, setAd] = useState<Ad>(null);
  const [owner, setOwner] = useState('');
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [error, setError] = useState(null);
  const [adsCount, setAdsCount] = useState(0);
  const [similarAds, setSimilarAds] = useState([]);
  const [similarLoading, setSimilarLoading] = useState(true);
  const {
    data: adsCountData,
    loading: adsCountLoading,
    error: adsCountError,
  } = useGetRequest<{adsCount: number}>({
    url: `${API_BASE}/users/${owner}/adscount`,
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openImageInFullScreen = (index) => {
        setSelectedImageIndex(index);
    };
  useEffect(() => {
    if (isLoadingComplete) {
      const fetchSimilarAds = async () => {
        try {
          const similarAdsResponse = await axios.get(
            `${API_BASE}/category/${ad.category}/${adId}/similar`,
          );
          const similarAdsData = similarAdsResponse.data.similarAds;
          const decryptedAds = decryptData(similarAdsData);
          setSimilarAds(decryptedAds);
          setSimilarLoading(false);
        } catch (error) {
          console.error('Error fetching similar ads:', error);
          setSimilarLoading(true);
        }
      };

      fetchSimilarAds();
    }
  }, [isLoadingComplete, ad, adId]);

  useEffect(() => {
    if (adsCountData) {
      setAdsCount(adsCountData.adsCount);
    }
  }, [adsCountData]);

  useEffect(() => {
    const storageKey = `ad_${adId}`;

    const fetchData = async () => {
      try {
        const adResponse = await axios.get(`${API_BASE}/ad/${adId}`);
        const decryptedAd = decryptData(adResponse.data.ad);
        setAd(decryptedAd);
        // console.log(ad.photos);
        
        fetchOwnerProfile(decryptedAd.owner);
        setIsLoadingComplete(true);
        AsyncStorage.setItem(storageKey, JSON.stringify(decryptedAd));
      } catch (error) {
        setError(error);
        console.error('Error fetching ad data:', error);
      }
    };

    const fetchOwnerProfile = async (ownerId: string) => {
      try {
        const ownerResponse = await axios.get(
          `${API_BASE}/users/${ownerId}/profile`,
        );
        const decryptedOwner = decryptData(ownerResponse.data.user);
        setOwner(decryptedOwner);
      } catch (error) {
        console.error('Error fetching owner profile:', error);
      }
    };

    AsyncStorage.getItem(storageKey)
      .then(storedAd => {
        if (storedAd) {
          const parsedAd: Ad = JSON.parse(storedAd);
          setAd(parsedAd);
          
          fetchOwnerProfile(parsedAd.owner);
          setIsLoadingComplete(true);
        } else {
          fetchData();
        }
      })
      .catch(error => {
        console.error('Error retrieving data from AsyncStorage:', error);
      });
  }, [adId]);

  const renderStatistics = () => {
    const statistics = [
      {label: 'Город', value: ad.city},
      {label: 'Состояние', value: ad.condition},
      {label: 'Двигатель', value: ad.fuelType},
      {label: 'Кузов', value: ad.bodyType},
      {label: 'Растаможен в РТ', value: ad.customsCleared ? 'Да' : 'Нет'},
      {label: 'Мощность', value: `${ad.engineCapacity}л.с`},
      {label: 'Коробка передач', value: ad.transmission},
      {label: 'Пробег', value: `${ad.mileage}км`},
      {label: 'Цвет', value: ad.color},
    ];

    return statistics.map((stat, index) => (
      <View key={index} style={styles.statListItem}>
        <Text style={styles.statLabel}>{stat.label}</Text>
        <Text style={styles.stat}>{stat.value}</Text>
      </View>
    ));
  };
  const convertDate = (dateString: string) => {
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const parsedDate = new Date(dateString);
    const day = parsedDate.getDate();
    const monthIndex = parsedDate.getMonth();
    const monthName = months[monthIndex];

    return `${day} ${monthName}`;
  };
  if (!isLoadingComplete || error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {error ? <Error /> : <Loader />}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>
            {ad.brand} {ad.model}, {ad.year}
          </Text>
          <View style={styles.priceFavCont}>
            <Text style={styles.price}>{ad.price}c</Text>
            <Icon
              type={Icons.Ionicons}
              name="star-outline"
              color={colors.blue}
              size={26}
            />
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.imageScrollView}
            showsHorizontalScrollIndicator={false}>
              {ad.photos.map((image, index) => (
                <TouchableWithoutFeedback key={index} onPress={() => openImageInFullScreen(index)}>
                    <FastImage
                        source={{ uri: image }}
                        style={[
                            styles.image,
                            ad.photos.length > 1 && index === 0 && styles.firstImage,
                            ad.photos.length === 1 && styles.fullWidthImage,
                        ]}
                    />
                </TouchableWithoutFeedback>
            ))}

            <ImageView
                images={ ad.photos.map(image => ({ uri: image }))}
                imageIndex={selectedImageIndex !== null ? selectedImageIndex : 0}
                visible={selectedImageIndex !== null}
                onRequestClose={() => setSelectedImageIndex(null)}
            />
          </ScrollView>
          <View style={styles.dateCont}>
            <Text style={styles.date}>
              Опубликовано {convertDate(ad.createdAt)}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                type={Icons.Ionicons}
                name="eye"
                color={colors.blue}
                size={22}
              />
              <Text style={styles.views}>{ad.views}</Text>
            </View>
          </View>
          <Text style={styles.stats}>Характеристики</Text>
          <View>{renderStatistics()}</View>
          <Text style={styles.description}>{ad.description}</Text>
          <View style={styles.ownerCont}>
            <View style={{flexDirection: 'row'}}>
              <FastImage
                source={{uri: owner.photoUri}}
                style={styles.ownerPhoto}
              />
              <View>
                <Text style={styles.ownerName}>
                  {owner.name} {owner.surname}
                </Text>
                <Text style={styles.ownerAdsCount}>{adsCount} обявлений</Text>
              </View>
            </View>
            <Button
              text="Подписаться"
              containerStyle={{paddingVertical: 3, paddingHorizontal: 12}}
              textStyle={{fontSize: 14, lineHeight: 19}}
            />
          </View>
        </View>
        <SimilarAds ads={similarAds} loading={similarLoading} />
      </ScrollView>
    </View>
  );
}

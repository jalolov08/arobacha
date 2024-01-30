import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
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
}

export default function AdDetails() {
  const {
    params: {adId},
  } = useRoute();
  const [ad, setAd] = useState<Ad>(null);
  const [owner, setOwner] = useState('');
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [error, setError] = useState(null);
  const {data, loading} = useGetRequest({
    url: `${API_BASE}/ad/${adId}`,
  });
  const fetchOwnerProfile = async (ownerId: string) => {
    try {
      const ownerResponse = await axios.get(
        `${API_BASE}/users/${ownerId}/profile`,
      );
      const decryptedOwner = decryptData(ownerResponse.data.user);
      setOwner(decryptedOwner);
    } catch (error) {
      console.error('Error fetching ad data:', error);
    }
  };

  useEffect(() => {
    if (data && data.ad) {
      try {
        const decryptedAd = decryptData(data.ad);
        setAd(decryptedAd);
        fetchOwnerProfile(decryptedAd.owner);
        setIsLoadingComplete(true);
      } catch (error) {
        setError(error);
        console.error('Error decrypting ad data:', error);
      }
    }
  }, [data]);

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
  if (loading || !isLoadingComplete || error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {error ? (
          <Error />
        ) : (
          <Loader />
        )}
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
              <FastImage
                key={index}
                source={{uri: image}}
                style={[
                  styles.image,
                  ad.photos.length > 1 && index === 0 && styles.firstImage,
                  ad.photos.length === 1 && styles.fullWidthImage,
                ]}
              />
            ))}
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
        <View style={{flexDirection:'row' }}>
        <FastImage source={{uri:owner.photoUri}} style={styles.ownerPhoto} />
             <View>
             <Text style={styles.ownerName}>{owner.name} {owner.surname}</Text>
             <Text style={styles.ownerAdsCount}>12 обявлений</Text>
             </View>
        </View>
        <Button text='Подписаться' containerStyle={{paddingVertical:3 , paddingHorizontal:12}} textStyle={{fontSize:14 , lineHeight:19 }}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

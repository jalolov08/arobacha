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
  doors: number;
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
  const {data, loading} = useGetRequest({
    url: `${API_BASE}/category/car/${adId}`,
  });
  const [ad, setAd] = useState<Ad>(null);

  useEffect(() => {
    if (data && data.car) {
      const decryptedAd = decryptData(data.car);
      setAd(decryptedAd);
    }
  }, [data]);

  const renderStatistics = () => {
    const statistics = [
      {label: 'Город', value: ad.city},
      {label: 'Состояние', value: ad.condition},
      {label: 'Двигатель', value: ad.fuelType},
      {label: 'Кузов', value: ad.bodyType},
      {label: 'Растаможен в РТ', value: ad.customsCleared},
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

  if (loading || !ad) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Loader />
      </View>
    );
  }
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
        </View>
      </ScrollView>
    </View>
  );
}

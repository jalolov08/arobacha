import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import useGetRequest from '../../hooks/useGetRequest';
import { API_BASE } from '../../../config';
import styles from './selectBrand.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Loader from '../../ui/Loader/loader.ui';
import Error from '../../ui/Error/error.ui';
import Input from '../../ui/Input/input.ui';

export default function SelectBrand() {
  const { params: { category } } = useRoute();
  const [options, setOptions] = useState([]);
  const { data, loading, error, refresh } = useGetRequest({
    url: `${API_BASE}/brand/${category}`,
  });

  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <HeaderBack title="Выберете марку" />
      <Input placeholder="Поиск марки" style={{marginTop:30}} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error  />
      ) : (
        options.map((item) => (
          <View style={styles.selectCont} key={item._id}>
            <Text style={styles.selectText}>{item.brand}</Text>
            <FastImage
              source={{ uri: item.logo }}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
        ))
      )}
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import useGetRequest from '../../hooks/useGetRequest';
import {API_BASE} from '../../../config';
import styles from './selectBrand.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Loader from '../../ui/Loader/loader.ui';
import Error from '../../ui/Error/error.ui';
import Input from '../../ui/Input/input.ui';

export default function SelectBrand() {
  const {
    params: {category},
  } = useRoute();
  const navigation = useNavigation();
  const [options, setOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const {data, loading, error, refresh} = useGetRequest({
    url: `${API_BASE}/brand/${category}`,
  });

  useEffect(() => {
    if (data) {
      setOptions(data);
    }
  }, [data]);

  const filteredOptions = options.filter(item =>
    item.brand.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <HeaderBack title="Выберете марку" />
      <Input
        placeholder="Поиск марки"
        style={{marginTop: 30}}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        filteredOptions.map(item => (
          <TouchableOpacity
            style={styles.selectCont}
            key={item._id}
            onPress={() =>
              navigation.navigate('SelectModel', {
                category: category,
                id: item._id,
              })
            }>
            <Text style={styles.selectText}>{item.brand}</Text>
            <FastImage
              source={{uri: item.logo}}
              resizeMode="contain"
              style={styles.logo}
            />
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

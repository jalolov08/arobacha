import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './selectModel.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import {useRoute} from '@react-navigation/native';
import useGetRequest from '../../hooks/useGetRequest';
import {API_BASE} from '../../../config';
import Loader from '../../ui/Loader/loader.ui';
import Error from '../../ui/Error/error.ui';

export default function SelectModel() {
  const {
    params: {category, id},
  } = useRoute();
  const [options, setOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const {data, loading, error, refresh} = useGetRequest({
    url: `${API_BASE}/brand/${category}/${id}/models`,
  });

  useEffect(() => {
    if (data) {
      setOptions(data.models);
    }
  }, [data]);

  const filteredOptions = options.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <HeaderBack title="Выберете модель" />
      <Input
        placeholder="Поиск модели"
        style={{marginTop: 30}}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        filteredOptions.map((item, index) => (
          <TouchableOpacity style={styles.modelItem} key={index}>
            <Text style={styles.selectText}>{item}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

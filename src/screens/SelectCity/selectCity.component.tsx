import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../SelectBrand/selectBrand.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import useGetRequest from '../../hooks/useGetRequest';
import {API_BASE} from '../../../config';
export default function SelectCity() {
  const [options, setOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const allowedCities = [
    'Душанбе',
    'Худжанд',
    'Курган-Тюбе',
    'Исфара',
    'Пенджикент',
    'Истаравшан',
    'Куляб',
    'Конибодом',
    'Вахдат',
    'Бустон',
  ];

  const filteredOptions = allowedCities.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <HeaderBack title="Выберете город" />
      <Input
        placeholder="Поиск города..."
        style={{marginTop: 30}}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredOptions.map(item => (
        <TouchableOpacity style={styles.selectCont}>
          <Text style={styles.selectText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

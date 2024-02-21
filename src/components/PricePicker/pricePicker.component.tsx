import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './pricePicker.style';
import {colors} from '../../constants/colors';
import Icon, {Icons} from '../../ui/Icon/icon.ui';
import Input from '../../ui/Input/input.ui';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
export default function PricePicker({onClose}: {onClose: () => void}) {
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const handleReset = () => {
    setFromPrice('');
    setToPrice('');
  };

  const handleApply = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Цена</Text>
        <Pressable onPress={onClose}>
          <Icon
            type={Icons.Ionicons}
            name="close-outline"
            color={colors.black}
            size={28}
          />
        </Pressable>
      </View>
      <View style={{paddingHorizontal: 30}}>
        <View style={styles.inputCont}>
          <Text style={styles.text}>От</Text>
          <BottomSheetTextInput
            value={fromPrice}
            onChangeText={setFromPrice}
            placeholder="- - - -"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.inputCont}>
          <Text style={styles.text}>До</Text>
          <BottomSheetTextInput
            value={toPrice}
            onChangeText={setToPrice}
            placeholder="- - - -"
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable onPress={handleReset}>
          <Text style={{color: colors.darkLight, fontWeight: 'bold'}}>
            Сбросить
          </Text>
        </Pressable>
        <Pressable onPress={handleApply}>
          <Text style={{color: colors.darkLight, fontWeight: 'bold'}}>
            Применить
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

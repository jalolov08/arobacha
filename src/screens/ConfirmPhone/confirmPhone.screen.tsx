import {View, Text, Image, ScrollView, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './confirmPhone.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import phone from '../../assets/images/hand_phone.png';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import {colors} from '../../constants/colors';

import {API_BASE} from '../../../config';
import Button from '../../ui/Button/button.ui';
import axios from 'axios';

const CELL_COUNT = 4;

export default function ConfirmPhone() {
  const [code, setCode] = useState('');

  const handleVerify = async () => {
    try {
      const response = await axios.post(`${API_BASE}/auth/verify`, {
        code: code,
      });

      Alert.alert('Success', 'Code verified successfully');
    } catch (error) {
      Alert.alert('Error', 'Code verification failed. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderBack />
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Image source={phone} style={styles.handPhone} />
        <Text style={styles.confirmText}>
          В течении 30 секунд на ваш номер телефона придёт SMS код.
        </Text>
        <CodeField
          value={code}
          onChangeText={(text: string) => setCode(text)}
          cellCount={CELL_COUNT}
          rootStyle={{marginTop: 30}}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={{
                flex: 1,
                height: 82,
                margin: 9,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: isFocused ? '#007AFF' : colors.gray,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 24, color: '#000'}}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <Button
          text="Проверить"
          containerStyle={{padding: 30, marginBottom: 40}}
          onPress={handleVerify}
        />
      </View>
    </ScrollView>
  );
}

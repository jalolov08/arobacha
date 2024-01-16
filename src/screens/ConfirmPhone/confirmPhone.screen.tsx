import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './confirmPhone.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import phone from '../../assets/images/hand_phone.png';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import {colors} from '../../constants/colors';

const CELL_COUNT = 4;

export default function ConfirmPhone() {
  const [code, setCode] = useState('');

  const handleCodeChange = (text: string) => {
    setCode(text);
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
          onChangeText={handleCodeChange}
          cellCount={CELL_COUNT}
          rootStyle={{marginVertical: 30}}
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
      </View>
    </ScrollView>
  );
}

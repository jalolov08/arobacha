import {Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './register.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import Button from '../../ui/Button/button.ui';

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!phoneNumber.trim() || !name.trim() || !username.trim()) {
      setError('Заполните все поля');
      return;
    }

    setError('Пользователь с таким телефоном существует');
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderBack />
      <Text style={styles.loginTitle}>Создать аккаунт</Text>
      <Input
        placeholder="Ваш номер телефона"
        keyboardType="numeric"
        style={{marginBottom: 20}}
        onChangeText={(text: string) => {
          setPhoneNumber(text);
          setError('');
        }}
      />
      <Input
        placeholder="Ваше имя"
        keyboardType="default"
        style={{marginBottom: 20}}
        onChangeText={(text: string) => {
          setName(text);
          setError('');
        }}
      />
      <Input
        placeholder="Ваш логин"
        keyboardType="default"
        onChangeText={(text: string) => {
          setUsername(text);
          setError('');
        }}
      />
      {error ? <Text style={styles.loginErrorText}>{error}</Text> : null}
      <Button
        text="Далее"
        containerStyle={{marginTop: 30}}
        onPress={handleRegister}
      />
    </ScrollView>
  );
}

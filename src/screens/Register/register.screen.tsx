import {Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './register.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import Button from '../../ui/Button/button.ui';
export default function Register() {
  return (
    <ScrollView style={styles.container}>
      <HeaderBack />
      <Text style={styles.loginTitle}>Создать аккаунт</Text>
      <Input
        placeholder="Ваш номер телефона"
        keyboardType="numeric"
        style={{marginBottom: 20}}
      />
      <Input
        placeholder="Ваше имя"
        keyboardType="default"
        style={{marginBottom: 20}}
      />
      <Input placeholder="Ваш логин" keyboardType="default" />
      <Text style={styles.loginErrorText}>
        Пользователь с таким телефоном существует
      </Text>
      <Button text="Далее" containerStyle={{marginTop: 30}} />

    </ScrollView>
  );
}

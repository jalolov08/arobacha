import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './login.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import Button from '../../ui/Button/button.ui';
export default function Login() {
  return (
    <ScrollView style={styles.container}>
      <HeaderBack />
      <Text style={styles.loginTitle}>Войти</Text>
      <View>
        <Input
          placeholder="Ваш логин или почта"
          keyboardType="email-address"
          style={{marginBottom: 20}}
        />
        <Input
          placeholder="Ваш пароль"
          keyboardType="default"
          secureTextEntry={true}
        />
        <View style={styles.textsCont}>
          <Text style={styles.loginErrorText}>Неверный пароль или логин</Text>
          <Text style={styles.forgot}>Забыли пароль?</Text>
        </View>
      </View>
      <Button text="Войти" containerStyle={{marginTop: 50}} />
    </ScrollView>
  );
}

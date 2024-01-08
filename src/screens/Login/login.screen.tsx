import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import styles from './login.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import Button from '../../ui/Button/button.ui';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreensType} from '../../types/screen.type';
type LoginProp = StackNavigationProp<ScreensType, 'Login'>;
export default function Login() {
  const navigation = useNavigation<LoginProp>();
  return (
    <ScrollView style={styles.container}>
      <HeaderBack />
      <Text style={styles.loginTitle}>Войти</Text>
      <View>
        <Input
          placeholder="Ваш логин или телефон"
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
      <Button
        text="Создать"
        containerStyle={{
          marginTop: 15,
          backgroundColor: colors.white,
          borderWidth: 1,
          borderColor: colors.blue,
        }}
        textStyle={{color: colors.blue}}
        onPress={() => navigation.navigate('Register')}
      />
    </ScrollView>
  );
}

import {Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './register.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import Button from '../../ui/Button/button.ui';
import {useAuth} from '../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreensType} from '../../types/screen.type';

type LoginProp = StackNavigationProp<ScreensType, 'Login'>;
export default function Register() {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {onRegister} = useAuth();
  const navigation = useNavigation<LoginProp>();


  const handleRegister = async () => {
    if (!phone.trim() || !name.trim() || !username.trim()) {
      setError('Заполните все поля');
      return;
    }
    
    const registerResult = await onRegister(
      password ,
      username,
      phone,
      name,
      surname,
    );
    if (registerResult.error) {
      setError(registerResult.msg.error);
    } else {
      navigation.navigate('ConfirmPhone');
    }
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
          setPhone(text);
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
        placeholder="Ваша фамилия"
        keyboardType="default"
        style={{marginBottom: 20}}
        onChangeText={(text: string) => {
          setSurname(text);
          setError('');
        }}
      />
      <Input
        placeholder="Ваш логин"
        keyboardType="default"
        style={{marginBottom: 20}}
        onChangeText={(text: string) => {
          setUsername(text);
          setError('');
        }}
      />
      <Input
        placeholder="Ваш пароль"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={(text: string) => {
          setPassword(text);
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

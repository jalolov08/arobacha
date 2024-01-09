import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './login.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Input from '../../ui/Input/input.ui';
import Button from '../../ui/Button/button.ui';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreensType} from '../../types/screen.type';
import {useAuth} from '../../context/AuthContext';

type LoginProp = StackNavigationProp<ScreensType, 'Login'>;

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {onLogin} = useAuth();
  const navigation = useNavigation<LoginProp>();

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setError('Введите логин и пароль');
      return;
    }

    const loginResult = await onLogin(username, password);

    if (loginResult.error) {
      setError(loginResult.msg.error);
      console.log(loginResult.msg.error);
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderBack />
      <Text style={styles.loginTitle}>Войти</Text>
      <View>
        <Input
          placeholder="Ваш логин или телефон"
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
        <View style={styles.textsCont}>
          {error ? <Text style={styles.loginErrorText}>{error}</Text> : null}

          <Text style={styles.forgot}>Забыли пароль?</Text>
        </View>
      </View>
      <Button
        text="Войти"
        containerStyle={{marginTop: 50}}
        onPress={handleLogin}
      />
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

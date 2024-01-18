import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login/login.screen';
import Register from '../../screens/Register/register.screen';
import { ScreensType } from '../../types/screen.type';
import ConfirmPhone from '../../screens/ConfirmPhone/confirmPhone.screen';


const Stack = createNativeStackNavigator<ScreensType>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='ConfirmPhone' component={ConfirmPhone}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
}

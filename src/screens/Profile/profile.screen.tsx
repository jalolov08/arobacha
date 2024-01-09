import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import { useAuth } from '../../context/AuthContext';
export default function Profile() {
  const {onLogout} = useAuth()
  return (
    <View>
      <Text>Profile</Text>
      <TouchableHighlight onPress={ async () =>  await onLogout()}>
        <Text>Logout</Text>
      </TouchableHighlight>
    </View>
  );
}

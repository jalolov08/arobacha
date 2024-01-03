import {View, Image} from 'react-native';
import React from 'react';
import styles from './header.style';
import logo from '../../assets/images/aroba.png';
export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} />
    </View>
  );
}

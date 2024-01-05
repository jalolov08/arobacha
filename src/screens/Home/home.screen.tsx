import {View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/header.component';
import Category from '../../components/Category/category.component';
import styles from './home.style';
import Ads from '../../components/Ads/ads.component';
export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <Ads />
    </View>
  );
}

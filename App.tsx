import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import { colors } from './src/constants/colors';
export default function App() {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white
  },
  
});

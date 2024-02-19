import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import {colors} from './src/constants/colors';
import {AuthProvider} from './src/context/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={styles.container}>
        <TabNavigator />
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

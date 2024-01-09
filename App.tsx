import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import {colors} from './src/constants/colors';
import {AuthProvider} from './src/context/AuthContext';
export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <TabNavigator />
      </View>
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

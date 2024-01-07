import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon, {Icons} from '../Icon/icon.ui';
import {colors} from '../../constants/colors';

const HeaderBack = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Icon
        type={Icons.Ionicons}
        name="chevron-back-outline"
        color={colors.black}
        size={28}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 8,
    height: 16,
    resizeMode: 'contain',
  },
});

export default HeaderBack;

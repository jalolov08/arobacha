import React, {ReactNode} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon, {Icons} from '../Icon/icon.ui';
import {colors} from '../../constants/colors';
type THeaderBack = {
  title?: string;
  rightEl?: ReactNode;
};

const HeaderBack = ({title, rightEl}: THeaderBack) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Icon
          type={Icons.Ionicons}
          name="chevron-back-outline"
          color={colors.black}
          size={28}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      {rightEl}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    width: 8,
    height: 16,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    color: colors.black,
    marginLeft: 12,
    fontFamily: 'Manrope-SemiBold',
  },
});

export default HeaderBack;

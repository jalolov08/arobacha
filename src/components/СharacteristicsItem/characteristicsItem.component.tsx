import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Icon, {Icons} from '../../ui/Icon/icon.ui';

type TParamsItem = {
  text: string;
  contStyle?: ViewStyle;
  textStyle?: TextStyle;
  icon?: string;
  onPress?: () => void;
};
export default function CharacteristicsItem({
  text,
  contStyle,
  textStyle,
  icon,
  onPress,
}: TParamsItem) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, contStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      {icon && (
        <Icon
          type={Icons.FontAwesome}
          name={icon}
          color={colors.placeholder}
          size={20}
          style={{marginLeft: 'auto'}}
        />
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayLight,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 13,
    margin: 4,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: colors.placeholder,
    fontFamily: 'Manrope-Medium',
  },
});

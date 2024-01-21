import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {colors} from '../../constants/colors';
import Icon, {Icons} from '../Icon/icon.ui';

interface IButton {
  text?: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: string;
  iconStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<IButton> = ({
  text,
  onPress,
  containerStyle,
  textStyle,
  icon,
  iconStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btnCont, containerStyle]}
      onPress={onPress}>
      {text && <Text style={[styles.btnText, textStyle]}>{text}</Text>}
      {icon && (
        <Icon
          type={Icons.Ionicons}
          name={icon}
          style={[styles.icon, iconStyle]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnCont: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  btnText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '500',
    fontFamily:'Manrope-SemiBold'

  },
  icon: {
    fontSize: 24,
    color: colors.black,
  },
});

export default Button;

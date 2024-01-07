import React from 'react';
import { Text, TouchableOpacity, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors } from '../../constants/colors';

interface IButton {
  text: string;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<IButton> = ({ text, onPress, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.btnCont, containerStyle]} onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{text}</Text>
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
  },
});

export default Button;

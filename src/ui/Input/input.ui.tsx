import { StyleProp, StyleSheet, TextInput, TextStyle } from 'react-native';
import React from 'react';
import { colors } from '../../constants/colors';

interface IInput {
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'decimal-pad';
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>; 
}

export default function Input(props: IInput) {
  const {
    secureTextEntry,
    placeholder,
    keyboardType = 'default',
    value,
    onChangeText,
    style, 
  } = props;

  return (
    <TextInput
      style={[styles.input, style]} 
      keyboardType={keyboardType}
      placeholderTextColor={colors.placeholder}
      placeholder={placeholder}
      value={value}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.grayLight,
    fontSize: 16,
    height: 44,
    color: colors.black,
    borderRadius: 50,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
});

import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './categoryItem.style';
import {useNavigation} from '@react-navigation/native';
export type TCategory = {
  category: {
    id: number;
    name: string;
    photo: ImageSourcePropType;
    value: string;
  };
};

export default function CategoryItem({category}: TCategory) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Category', {category: category})}>
      <Image source={category.photo} style={styles.categoryPhoto} />
      <Text style={styles.categoryText}>{category.name}</Text>
    </TouchableOpacity>
  );
}

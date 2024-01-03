import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import styles from './categoryItem.style';
type Category = {
  category: {
    id: number;
    name: string;
    photo: ImageSourcePropType;
  };
};

export default function CategoryItem({category}: Category) {
  return (
    <View style={styles.container}>
      <Image source={category.photo} style={styles.categoryPhoto} />
      <Text style={styles.categoryText}>{category.name}</Text>
    </View>
  );
}

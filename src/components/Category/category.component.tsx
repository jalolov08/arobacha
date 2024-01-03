import {View} from 'react-native';
import React from 'react';
import styles from './category.style';
import CategoryItem from './CategoryItem/categoryItem.component';
import categoryCar from '../../assets/images/category-car.png';
import categoryMoto from '../../assets/images/category-moto.png';
export default function Category() {
  const categories = [
    {id: 1, name: 'Машины', photo: categoryCar},
    {id: 2, name: 'Мототранспорт', photo: categoryMoto},
  ];
  return (
    <View style={styles.container}>
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </View>
  );
}

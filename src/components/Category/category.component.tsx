import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './category.style';
import CategoryItem from './CategoryItem/categoryItem.component';
import categoryCar from '../../assets/images/category-car.png';
import categoryMoto from '../../assets/images/category-moto.png';
export default function Category() {
  const categories = [
    {id: 1, name: 'Машины', photo: categoryCar, value: 'car'},
    {id: 2, name: 'Мототранспорт', photo: categoryMoto, value: 'moto'},
  ];
  const numColumns = 2;
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={numColumns}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
}

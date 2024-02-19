import React from 'react';
import {Text, View} from 'react-native';
import CharacteristicsItem from '../СharacteristicsItem/characteristicsItem.component';
import {useNavigation} from '@react-navigation/native';

export default function Characteristics({
  categoryValue,
  openYear,
}: {
  categoryValue: string;
  openYear: () => void;
}) {
  const navigation = useNavigation();

  return (
    <View>
      <CharacteristicsItem
        text="Марка , модель"
        onPress={() =>
          navigation.navigate('SelectBrand', {category: categoryValue})
        }
      />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <CharacteristicsItem
          text="Год"
          contStyle={{width: '18%'}}
          onPress={openYear}
        />
        <CharacteristicsItem text="Цена" contStyle={{width: '25%'}} />
        <CharacteristicsItem
          text="Параметры"
          icon="sliders"
          contStyle={{width: '50%'}}
        />
      </View>
      <CharacteristicsItem
        text="Все города"
        onPress={() => navigation.navigate('SelectCity')}
      />
    </View>
  );
}

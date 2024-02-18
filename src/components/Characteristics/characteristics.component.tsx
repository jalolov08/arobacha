import React from 'react';
import {View} from 'react-native';
import CharacteristicsItem from '../СharacteristicsItem/characteristicsItem.component';

export default function Characteristics() {
  return (
    <View>
      <CharacteristicsItem text="Марка , модель" />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <CharacteristicsItem text="Год" contStyle={{width: '18%'}} />
        <CharacteristicsItem text="Цена" contStyle={{width: '25%'}} />
        <CharacteristicsItem
          text="Параметры"
          icon="sliders"
          contStyle={{width: '50%'}}
        />
      </View>
      <CharacteristicsItem text="Все города" />
    </View>
  );
}

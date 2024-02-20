import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import {colors} from '../../constants/colors';
import Header from '../Header/header.component';
import Icon, {Icons} from '../../ui/Icon/icon.ui';

const YearPicker = ({onClose}: {onClose: () => void}) => {
  const years = [];
  const currentYear = new Date().getFullYear();
  const yearsRange = 50;
  for (let i = currentYear; i >= currentYear - yearsRange; i--) {
    years.push(i.toString());
  }
  const [startYear, setStartYear] = useState(currentYear.toString());
  const [endYear, setEndYear] = useState(currentYear.toString());
  const startYearPickerRef = useRef(null);
  const endYearPickerRef = useRef(null);
  const handleStartYearChange = (year: string) => {
    setStartYear(year);
  };

  const handleEndYearChange = (year: string) => {
    setEndYear(year);
  };

  const handleSave = () => {
    console.log('Selected start year:', startYear);
    console.log('Selected end year:', endYear);
  };
  const handleReset = () => {
    setStartYear(currentYear.toString());
    setEndYear(currentYear.toString());
    const currentIndex = years.indexOf(currentYear.toString());
    startYearPickerRef.current?.scrollToTargetIndex(currentIndex);
    endYearPickerRef.current?.scrollToTargetIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Год выпуска</Text>
        <Pressable onPress={onClose}>
          <Icon
            type={Icons.Ionicons}
            name="close-outline"
            color={colors.black}
            size={28}
          />
        </Pressable>
      </View>
      <View style={styles.pickerContainer}>
        <ScrollPicker
          ref={startYearPickerRef}
          dataSource={years}
          selectedIndex={years.indexOf(startYear)}
          onValueChange={handleStartYearChange}
          renderItem={(data, index, isSelected) => {
            return (
              <Text
                style={[
                  styles.yearText,
                  isSelected && styles.selectedYearText,
                ]}>
                {data}
              </Text>
            );
          }}
          wrapperBackground={'#fff'}
          itemHeight={50}
          wrapperHeight={150}
          highlightColor={'#d8d8d8'}
          highlightBorderWidth={2}
        />
        <ScrollPicker
          ref={endYearPickerRef}
          dataSource={years}
          selectedIndex={years.indexOf(endYear)}
          onValueChange={handleEndYearChange}
          wrapperHeight={150}
          renderItem={(data, index, isSelected) => {
            return (
              <Text
                style={[
                  styles.yearText,
                  isSelected && styles.selectedYearText,
                ]}>
                {data}
              </Text>
            );
          }}
          wrapperBackground={'#fff'}
          itemHeight={50}
          highlightColor={'#d8d8d8'}
          highlightBorderWidth={2}
        />
      </View>
      <View style={styles.footer}>
        <Pressable onPress={handleReset}>
          <Text style={{color: colors.darkLight, fontWeight: 'bold'}}>
            Сбросить
          </Text>
        </Pressable>
        <Pressable>
          <Text style={{color: colors.darkLight, fontWeight: 'bold'}}>
            Применить
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },

  yearText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 50,
  },
  selectedYearText: {
    color: '#007AFF',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default YearPicker;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const years = [];
const currentYear = new Date().getFullYear();
const yearsRange = 50;
for (let i = currentYear; i >= currentYear - yearsRange; i--) {
  years.push(i.toString());
}

const YearPicker = () => {
  const [startYear, setStartYear] = useState(currentYear.toString());
  const [endYear, setEndYear] = useState(currentYear.toString());

  const handleStartYearChange = year => {
    setStartYear(year);
  };

  const handleEndYearChange = year => {
    setEndYear(year);
  };

  const handleSave = () => {
    console.log('Selected start year:', startYear);
    console.log('Selected end year:', endYear);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите год</Text>
      <View style={styles.pickerContainer}>
        <ScrollPicker
          dataSource={years}
          selectedIndex={years.indexOf(startYear)}
          onValueChange={handleStartYearChange}
          
          renderItem={(data, index, isSelected) => {
            return (
              <Text
                style={[styles.yearText, isSelected && styles.selectedYearText]}>
                {data}
              </Text>
            );
          }}
          wrapperBackground={'#fff'}
          itemHeight={50}
          highlightColor={'#d8d8d8'}
          highlightBorderWidth={2}
        />
        <ScrollPicker
          dataSource={years}
          selectedIndex={years.indexOf(endYear)}
          onValueChange={handleEndYearChange}
          renderItem={(data, index, isSelected) => {
            return (
              <Text
                style={[styles.yearText, isSelected && styles.selectedYearText]}>
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
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '40%',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
});

export default YearPicker;

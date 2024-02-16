import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './similarAds.style';
import { colors } from '../../constants/colors';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
import { IRecommendation } from '../../types/recomendation.type';

type TSimilarAds = {
  ads: IRecommendation[];
  loading: boolean;
};

const SkeletonAdItem = () => (
  <View style={styles.adCont}>
    <View
      style={{
        width: 165,
        height: 110,
        borderRadius: 5,
        backgroundColor: colors.grayLight,
      }}
    />
    <View style={{ marginTop: 8, marginBottom: 6 }}>
      <View style={{ width: '70%', height: 16, backgroundColor: colors.grayLight }} />
      <View style={{ marginTop: 4, width: '50%', height: 14, backgroundColor: colors.grayLight }} />
      <View style={{ marginTop: 4, width: '80%', height: 14, backgroundColor: colors.grayLight }} />
    </View>
  </View>
);

export default function SimilarAds({ ads, loading }: TSimilarAds) {
  const navigation = useNavigation();
  const numColumns = 2;

  return (
    <View style={styles.container}>
      {loading ? (
        <FlatList
          data={[1, 2, 3, 4]}
          numColumns={numColumns}
          keyExtractor={(item, index) => index.toString()}
          renderItem={() => <SkeletonAdItem />}
        />
      ) : (
        <FlatList
          data={ads}
          numColumns={numColumns}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AdDetails', { adId: item._id })}
              style={[
                styles.adCont,
                { marginLeft: index % numColumns !== 0 ? 12 : 0 },
              ]}
            >
              <FastImage
                source={{
                  uri: item.photos[0],
                  priority: FastImage.priority.high,
                }}
                style={{
                  width: 165,
                  height: 110,
                  borderRadius: 5,
                  backgroundColor: colors.grayLight,
                }}
              />
              <Text style={styles.adTitle} numberOfLines={1}>
                {item.brand} {item.model}, {item.year}
              </Text>
              <Text style={styles.adPrice}>{item.price}c</Text>
              <Text style={styles.adCity}>{item.city}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

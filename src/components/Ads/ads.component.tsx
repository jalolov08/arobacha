import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  Pressable,
} from 'react-native';
import styles from './ads.style';
import {IRecommendation} from '../../types/recomendation.type';
import Loader from '../../ui/Loader/loader.ui';
import Error from '../../ui/Error/error.ui';
import FastImage from 'react-native-fast-image';
import {colors} from '../../constants/colors';
import Zero from '../../ui/Zero/zero.ui';
interface IAds {
  data: IRecommendation[];
  loading: boolean;
  error: Error | null;
  refresh: () => void;
}

const Ads: React.FC<IAds> = ({data, loading, error, refresh}) => {
  const [refreshing, setRefreshing] = useState(false);

  const numColumns = 2;

  return (
    <View style={styles.container}>
      {/* <Zero /> */}
      {error ? (
        <>
          <Error />
          <Pressable style={styles.retryBtn} onPress={refresh}>
            <Text style={styles.retryText}>Retry</Text>
          </Pressable>
        </>
      ) : loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          numColumns={numColumns}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
          renderItem={({item, index}) => (
            <View
              style={[
                styles.adCont,
                {marginLeft: index % numColumns !== 0 ? 12 : 0},
              ]}>
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
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Ads;

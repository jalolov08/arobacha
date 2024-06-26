import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './ads.style';
import {IRecommendation} from '../../types/recomendation.type';
import Loader from '../../ui/Loader/loader.ui';
import Error from '../../ui/Error/error.ui';
import FastImage from 'react-native-fast-image';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
interface IAds {
  data: IRecommendation[];
  loading: boolean;
  error: Error | null;
  refresh: () => void;
  loadMore: () => void;
  header?: () => void;
}

const Ads: React.FC<IAds> = ({
  data,
  loading,
  error,
  refresh,
  loadMore,
  header,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);
  const numColumns = 2;
  const navigation = useNavigation();
  const handleEndReached = () => {
    if (!loading) {
      loadMore();
    }
  };
  useEffect(() => {
    if (data.length === 0) {
      setAllDataLoaded(true);
    }
  }, [data]);
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
          ListHeaderComponent={header}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            allDataLoaded ? null : (
              <ActivityIndicator color={colors.blue} size={50} />
            )
          }
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AdDetails', {adId: item._id})}
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
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Ads;

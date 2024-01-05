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
import useGetRequest from '../../hooks/useGetRequest';
import {API_BASE} from '../../../config';
import {IRecommendation} from '../../types/recomendation.type';
import Loader from '../../ui/Loader/loader.ui';
import Error from '../../ui/Error/error.ui';

interface IAds {}

const Ads: React.FC<IAds> = () => {
  const [refreshing, setRefreshing] = useState(false);

  const {data, loading, error, refresh} = useGetRequest<IRecommendation[]>({
    url: `${API_BASE}/recommends`,
  });
  const recommendation: IRecommendation[] = data || [];
  const numColumns = 2;

  return (
    <View style={styles.container}>
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
          data={recommendation}
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
              <Image
                source={{uri: item.photos[0]}}
                style={{width: 165, height: 110, borderRadius: 5}}
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

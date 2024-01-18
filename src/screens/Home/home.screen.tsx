import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/header.component';
import Category from '../../components/Category/category.component';
import styles from './home.style';
import Ads from '../../components/Ads/ads.component';
import useGetRequest from '../../hooks/useGetRequest';
import {IRecommendation} from '../../types/recomendation.type';
import {API_BASE} from '../../../config';
export default function Home() {
  const [adsData, setAdsData] = useState<IRecommendation[]>([]);

  const {data, loading, error, refresh} = useGetRequest<IRecommendation[]>({
    url: `${API_BASE}/recommends`,
  });

  useEffect(() => {
    if (data) {
      setAdsData(data);
    }
  }, [data]);
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <Ads data={adsData} refresh={refresh} loading={loading} error={error} />
    </View>
  );
}

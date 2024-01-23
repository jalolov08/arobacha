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

  const [page, setPage] = useState(1);

  const {data, loading, error, refresh} = useGetRequest<IRecommendation[]>({
    url: `${API_BASE}/recommends?page=${page}`,
  });

  useEffect(() => {
    if (data) {
      setAdsData([...adsData, ...data]);
    }
  }, [data]);
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  return (
    <View style={styles.container}>
      <Header />
      <Category />
      <Ads
        data={adsData}
        refresh={refresh}
        loading={loading}
        error={error}
        loadMore={loadMore}
      />
    </View>
  );
}

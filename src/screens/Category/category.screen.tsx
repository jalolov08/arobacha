import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './category.style';
import HeaderBack from '../../ui/HeaderBack/headerBack.ui';
import Icon, {Icons} from '../../ui/Icon/icon.ui';
import {colors} from '../../constants/colors';
import {useRoute} from '@react-navigation/native';
import useGetRequest from '../../hooks/useGetRequest';
import {API_BASE} from '../../../config';
import {decryptData} from '../../utils/decryptData';
import Ads from '../../components/Ads/ads.component';
import {IRecommendation} from '../../types/recomendation.type';
import Characteristics from '../../components/Characteristics/characteristics.component';

export default function Category() {
  const {
    params: {category},
  } = useRoute();
  const [adsData, setAdsData] = useState<IRecommendation[]>([]);
  const [page, setPage] = useState(1);

  const {data, loading, error, refresh} = useGetRequest({
    url: `${API_BASE}/category/${category.value}?page=${page}`,
  });
  useEffect(() => {
    if (data) {
      const decryptedAds = decryptData(data.ads);
      setAdsData(prevAdsData => prevAdsData.concat(decryptedAds.flat()));
    }
  }, [data]);
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  const header = <Characteristics categoryValue={category?.value} />;

  return (
    <View style={styles.container}>
      <HeaderBack
        title={category.name}
        rightEl={
          <Icon
            type={Icons.Ionicons}
            name="search-outline"
            color={colors.black}
            size={28}
            style={{marginLeft: 'auto', marginTop: 'auto'}}
          />
        }
      />

      <Ads
        data={adsData}
        refresh={refresh}
        loading={loading}
        error={error}
        loadMore={loadMore}
        header={header}
      />
    </View>
  );
}

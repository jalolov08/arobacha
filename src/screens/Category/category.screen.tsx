import {Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import YearPicker from '../../components/YearPicker/yearPicker.component';
import {ScrollView} from 'react-native-gesture-handler';
export default function Category() {
  const {
    params: {category},
  } = useRoute();
  const [adsData, setAdsData] = useState<IRecommendation[]>([]);
  const [page, setPage] = useState(1);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['40%'], []);
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
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
  const openYear = () => bottomSheetRef.current?.expand();
  const closeYear = () => bottomSheetRef.current?.close();
  const header = (
    <Characteristics categoryValue={category?.value} openYear={openYear} />
  );
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingVertical: 10,
          backgroundColor: colors.white,
        }}>
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
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          enableContentPanningGesture={false}
          snapPoints={snapPoints}
          backdropComponent={renderBackDrop}
          handleIndicatorStyle={{display: 'none'}}
          enablePanDownToClose={true}>
          <YearPicker onClose={closeYear} />
        </BottomSheet>
      </View>
    </ScrollView>
  );
}

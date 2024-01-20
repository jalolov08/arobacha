import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './profile.style';
import Header from '../../components/Header/header.component';
import ProfileTop from '../../components/ProfileTop/profileTop.component';
import {useAuth} from '../../context/AuthContext';
import {decryptData} from '../../utils/decryptData';
import Button from '../../ui/Button/button.ui';
import {colors} from '../../constants/colors';
import Ads from '../../components/Ads/ads.component';
import {API_BASE} from '../../../config';
import useGetRequest from '../../hooks/useGetRequest';
import {IRecommendation} from '../../types/recomendation.type';
export default function Profile() {
  const {onGetMe} = useAuth();
  const [me, setMe] = useState<{
    _id: string;
    about: string;
    followers: any[];
    follows: any[];
    name: string;
    surname: string;
    phone: string;
    photoUri: string;
    username: string;
  }>({
    _id: '',
    about: '',
    followers: [],
    follows: [],
    name: '',
    surname: '',
    phone: '',
    username: '',
    photoUri: '',
  });
  const [adsData, setAdsData] = useState<IRecommendation[]>([]);

  const {data, loading, error, refresh} = useGetRequest<IRecommendation[]>({
    url: `${API_BASE}/profile/my/ads`,
  });

  useEffect(() => {
    if (data) {
      setAdsData(data);
      const decryptedAds = decryptData(data.ads);
      setAdsData(decryptedAds);
    }
  }, [data]);
  useEffect(() => {
    const getMe = async () => {
      try {
        const getMeResult = await onGetMe();
        const decryptedMe = decryptData(getMeResult);
        setMe(decryptedMe);
        console.log(decryptedMe);
      } catch (error) {
        console.error('Error fetching or decrypting data:', error);
      }
    };

    getMe();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ProfileTop
        username={me.username}
        name={me.name}
        about={me.about}
        surname={me.surname}
        followersCount={me.followers.length}
        followingCount={me.follows.length}
        announcementsCount={adsData.length}
        profilePhotoUri={
          me?.photoUri ||
          'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        }
      />
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Button text="Редактировать" containerStyle={{width: '83%'}} />
        <Button
          icon="settings-outline"
          containerStyle={{
            width: '15%',
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: colors.blue,
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <Ads data={adsData} refresh={refresh} loading={loading} error={error} />
      </View>
    </View>
  );
}

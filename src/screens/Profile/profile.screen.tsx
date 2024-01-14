import {View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './profile.style';
import Header from '../../components/Header/header.component';
import ProfileTop from '../../components/ProfileTop/profileTop.component';
import {useAuth} from '../../context/AuthContext';
import {decryptData} from '../../utils/decryptData';
export default function Profile() {
  const {onGetMe} = useAuth();
  useEffect(() => {
    const getMe = async () => {
      const getMeResult = await onGetMe();

      console.log(getMeResult.data.me);
      const decryptedMe = decryptData(getMeResult.data.me);
      console.log(decryptedMe);
    };
    getMe();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ProfileTop
        username={'test'}
        followersCount={200}
        followingCount={12}
        announcementsCount={12}
        profilePhotoUri={
          'https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.668xw:1.00xh;0.184xw,0&resize=640:*'
        }
      />
    </View>
  );
}

import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './profile.style';
import Header from '../../components/Header/header.component';
import ProfileTop from '../../components/ProfileTop/profileTop.component';
import {useAuth} from '../../context/AuthContext';
import {decryptData} from '../../utils/decryptData';
import Button from '../../ui/Button/button.ui';
import {colors} from '../../constants/colors';
export default function Profile() {
  const {onGetMe} = useAuth();
  const [me, setMe] = useState<{
    _id: string;
    about: string;
    followers: any[];
    follows: any[];
    name: string;
    phone: string;
    photoUri: string;
    username: string;
  }>({
    _id: '',
    about: '',
    followers: [],
    follows: [],
    name: '',
    phone: '',
    username: '',
    photoUri: '',
  });

  useEffect(() => {
    const getMe = async () => {
      try {
        const getMeResult = await onGetMe();
        const decryptedMe = decryptData(getMeResult);
        setMe(decryptedMe);
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
        followersCount={me.followers.length}
        followingCount={me.follows.length}
        announcementsCount={12}
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
    </View>
  );
}

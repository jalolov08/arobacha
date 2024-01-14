import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

interface IProfileTop {
  username: string;
  announcementsCount: number;
  followersCount: number;
  followingCount: number;
  profilePhotoUri: string;
}

export default function ProfileTop({
  username,
  announcementsCount,
  followersCount,
  followingCount,
  profilePhotoUri,
}: IProfileTop) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePhoto}
        source={{
          uri: profilePhotoUri,
        }}
      />
      <View style={styles.profileTextsCont}>
        <Text style={styles.profileUsername}>{username}</Text>
        <View style={styles.countsCont}>
          <View style={styles.countCont}>
            <Text style={styles.count}>{announcementsCount}</Text>
            <Text style={styles.countText}>Объявлений</Text>
          </View>
          <View style={styles.countCont}>
            <Text style={styles.count}>{followersCount}</Text>
            <Text style={styles.countText}>Подписчиков</Text>
          </View>
          <View style={styles.countCont}>
            <Text style={styles.count}>{followingCount}</Text>
            <Text style={styles.countText}>Подписок</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 35,
  },
  profileUsername: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 20,
  },
  profileTextsCont: {
    flex: 1,
    alignItems: 'center',
  },
  countsCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  count: {
    fontSize: 30,
    fontWeight: '500',
    color: colors.black,
  },
  countText: {
    fontSize: 11,
    color: '#767676',
  },
});

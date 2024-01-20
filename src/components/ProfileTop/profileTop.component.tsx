import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';

interface IProfileTop {
  username: string;
  name: string;
  surname: string;
  announcementsCount: number;
  followersCount: number;
  followingCount: number;
  profilePhotoUri: string;
  about: string;
}

export default function ProfileTop({
  username,
  announcementsCount,
  followersCount,
  followingCount,
  profilePhotoUri,
  name,
  surname,
  about,
}: IProfileTop) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.profilePhoto}
          source={{
            uri: profilePhotoUri,
          }}
        />
        <View style={styles.profileTextsCont}>
          <Text style={styles.profileName}>
            {name} {surname}
          </Text>
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
      <View style={{marginTop: 5}}>
        <Text style={styles.username}>@{username}</Text>
        <TouchableOpacity onPress={toggleFullText}>
          <Text
            style={styles.description}
            numberOfLines={showFullText ? undefined : 1}>
            {about}
          </Text>
        </TouchableOpacity>
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
  profileName: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '500',
    marginBottom: 10,
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
  username: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.blue,
  },
  description: {
    fontSize: 14,
    color: colors.dark,
  },
});

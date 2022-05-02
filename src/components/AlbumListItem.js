import React from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';

import Avatar from './Avatar';

import theme from '../theme';

const AlbumListItem = ({title, user, background, avatars}) => {
  const avatarsLength = avatars.length;

  return (
    <ImageBackground
      source={background}
      style={styles.container}
      imageStyle={styles.imageBackground}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.user}>Created by {user}</Text>
      </View>
      <View style={styles.avatarContainer}>
        {avatars.map((avatar, index) => (
          <Avatar
            key={avatar.id}
            image={avatar.image}
            style={index + 1 !== avatarsLength && styles.mrn24}
          />
        ))}
      </View>
    </ImageBackground>
  );
};

export default AlbumListItem;

const styles = StyleSheet.create({
  container: {
    height: 82,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageBackground: {
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: theme.colors.white,
    fontWeight: '700',
  },
  user: {
    fontSize: 16,
    color: theme.colors.gray,
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  mrn24: {
    marginRight: -24,
  },
});

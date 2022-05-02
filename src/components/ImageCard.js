import React from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';

import theme from '../theme';

const ImageCard = ({title, user, background, avatars}) => {
  return (
    <ImageBackground
      source={background}
      style={styles.container}
      imageStyle={styles.imageBackground}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.user}>Created by {user}</Text>
      </View>
      <Text style={styles.photoCount}>9 photos</Text>
    </ImageBackground>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    height: 123,
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  imageBackground: {
    borderRadius: 10,
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
  photoCount: {
    fontSize: 14,
    color: theme.colors.gray,
  },
});

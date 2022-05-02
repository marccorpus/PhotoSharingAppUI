import React from 'react';
import {StyleSheet, Image} from 'react-native';

import theme from '../theme';

const Avatar = ({image, style}) => {
  return <Image source={image} style={[styles.avatar, style]} />;
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: theme.colors.white,
  },
});

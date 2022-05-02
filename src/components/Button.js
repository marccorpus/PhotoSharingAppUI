import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';

import theme from '../theme';

const Button = ({onPress, type, style, title}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.container, style]}>
        <Text style={[styles.text, type === 'primary' && styles.primaryText]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  text: {
    fontSize: 18,
    color: theme.colors.black,
    textAlign: 'center',
  },
  primaryText: {
    fontFamily: 'Nunito-Bold',
  },
  container: {
    borderRadius: 10,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
  },
});

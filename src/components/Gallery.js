import React from 'react';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';

import theme from '../theme';

const Gallery = ({title, images}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={images}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Image source={item.background} style={styles.image} />;
        }}
        numColumns={3}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: theme.colors.gray,
    textAlign: 'center',
  },
  image: {
    width: 106,
    height: 106,
    margin: 4,
  },
});

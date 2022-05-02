import React from 'react';
import {View, Text} from 'react-native';

import ImageCard from '../components/ImageCard';
import People from '../components/People';

import albumsData from '../data/album-page';

const SharedAlbumScreen = ({route}) => {
  const id = route.params.id;
  const album = albumsData.find(a => a.id === id);

  return (
    <View>
      <ImageCard {...album} />

      <People people={album.avatars} />
    </View>
  );
};

export default SharedAlbumScreen;

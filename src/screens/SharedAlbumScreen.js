import React from 'react';
import {View} from 'react-native';

import ImageCard from '../components/ImageCard';
import People from '../components/People';
import Gallery from '../components/Gallery';

import albumsData from '../data/album-page';
import galleryData from '../data/background-images';

const SharedAlbumScreen = ({route}) => {
  const id = route.params.id;
  const album = albumsData.find(a => a.id === id);

  return (
    <View>
      <ImageCard {...album} />

      <People people={album.avatars} />

      <Gallery title="Photos" images={galleryData} />
    </View>
  );
};

export default SharedAlbumScreen;

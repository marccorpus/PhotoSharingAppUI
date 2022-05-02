import React from 'react';
import {FlatList} from 'react-native';

import AlbumListItem from './AlbumListItem';

const AlbumList = ({data}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <AlbumListItem {...item} />}
    />
  );
};

export default AlbumList;

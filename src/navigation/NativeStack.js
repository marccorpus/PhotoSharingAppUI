import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AlbumsScreen from '../screens/AlbumsScreen';
import SharedAlbumScreen from '../screens/SharedAlbumScreen';

const Stack = createNativeStackNavigator();

const NativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="albums"
        component={AlbumsScreen}
        options={{title: 'Albums'}}
      />
      <Stack.Screen
        name="shared-album"
        component={SharedAlbumScreen}
        options={{title: 'Shared album'}}
      />
    </Stack.Navigator>
  );
};

export default NativeStack;

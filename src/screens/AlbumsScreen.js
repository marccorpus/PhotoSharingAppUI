import React, {useLayoutEffect, useRef} from 'react';
import {StyleSheet, Alert, Pressable, View} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';

import IconButton from '../components/IconButton';
import Button from '../components/Button';
import AlbumList from '../components/AlbumList';

import theme from '../theme';
import albumsData from '../data/album-page';

const AlbumsScreen = ({navigation}) => {
  const bottomSheet = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={() => bottomSheet.current.show()}
            style={({pressed}) => pressed && styles.pressed}>
            <IconButton
              name="plus"
              backgroundColor={theme.colors.primary}
              iconColor={theme.colors.white}
              size={24}
            />
          </Pressable>
        );
      },
    });
  }, []);

  const createNewGalleryHandler = () => {
    Alert.alert('Alert', 'Create a new album!');
  };

  const cancelHandler = () => {
    bottomSheet.current.close();
  };

  return (
    <View>
      <AlbumList data={albumsData} />

      <BottomSheet
        hasDraggableIcon
        ref={bottomSheet}
        height={200}
        backgroundColor="transparent"
        sheetBackgroundColor={theme.colors.gray}>
        <View style={styles.actionContainer}>
          <Button
            onPress={createNewGalleryHandler}
            type="primary"
            title="Create a new gallery"
            style={styles.button}
          />
          <Button
            onPress={cancelHandler}
            type="secondary"
            title="Cancel"
            style={styles.button}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default AlbumsScreen;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  actionContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  button: {
    marginVertical: 8,
  },
});

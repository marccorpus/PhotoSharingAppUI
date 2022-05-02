import React, {useLayoutEffect, useRef} from 'react';
import {StyleSheet, Alert, Pressable, View, Text} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';

import IconButton from '../components/IconButton';
import Button from '../components/Button';

import theme from '../theme';

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
      <Text>This is AlbumsScreen.</Text>

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
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  button: {
    marginVertical: 8,
  },
});

import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const IconButton = ({name, backgroundColor, iconColor, size}) => {
  return (
    <View style={{padding: 2, backgroundColor, borderRadius: size}}>
      <Entypo name={name} color={iconColor} size={size} />
    </View>
  );
};

export default IconButton;

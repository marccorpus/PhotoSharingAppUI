import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import NativeStack from './NativeStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <NativeStack />
    </NavigationContainer>
  );
};

export default Navigation;

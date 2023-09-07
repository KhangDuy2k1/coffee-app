import React from 'react';
import { View, Text } from 'react-native';
import Favourite from '../../components/favourite';
const FavouriteScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Favourite/>
    </View>
  );
};

export default FavouriteScreen;
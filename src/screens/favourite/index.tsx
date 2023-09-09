import React from 'react';
import { View, Text } from 'react-native';
import Favourite from '../../components/favourite';
const FavouriteScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <Favourite navigate={navigation}/>
    </View>
  );
};

export default FavouriteScreen;
import React from 'react';
import { View, Text } from 'react-native';
import Home from '../../components/home';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home navigation={navigation}/>
    </View>
  );
};

export default HomeScreen;
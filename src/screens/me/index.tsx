import React from 'react';
import { View, Text } from 'react-native';
import Me from '../../components/me';
const MeScreen = ({navigation, route}) => {
    const { param } = route.params;
  return (
    <View style={{ flex: 1}}>
      <Me navigation = {navigation} param = {param}/>
    </View>
  );
};

export default MeScreen;
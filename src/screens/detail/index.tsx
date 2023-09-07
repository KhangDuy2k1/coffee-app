import React from 'react';
import { View, Text } from 'react-native';
import Detail from '../../components/detail';
const DetailScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Detail navigation= {navigation}/>
    </View>
  );
};

export default DetailScreen;
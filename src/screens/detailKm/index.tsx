import React from 'react';
import { View, Text } from 'react-native';
import DetailKm from '../../components/detailKm';
const DetailKmScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DetailKm navigation={navigation}/>
    </View>
  );
};

export default DetailKmScreen;
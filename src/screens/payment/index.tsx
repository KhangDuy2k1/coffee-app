import React from 'react';
import { View, Text } from 'react-native';
import Payment from '../../components/payment'
import Header from '../../components/home/header';
const PaymentScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Payment navigation = {navigation}/>
    </View>
  );
};

export default PaymentScreen;
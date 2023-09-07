import React from 'react';
import { View, Text } from 'react-native';
import Payment from '../../components/payment'
const PaymentScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Payment/>
    </View>
  );
};

export default PaymentScreen;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../home/header';
import Body from './body';

const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{height: 30, fontWeight: 'bold', fontSize: 16, alignSelf: "flex-start", marginTop: 8, marginLeft: 10}}>Các sản phẩm đã thanh toán</Text>
      <Body navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
  
    },
  });
export default Payment;
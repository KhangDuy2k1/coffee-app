import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../home/header';
import Body from './body';

const Pay = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Body/>
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
export default Pay;
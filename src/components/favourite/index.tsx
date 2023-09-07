import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../home/header';
import ProductList from "./List"
const Favourite = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <ProductList/>
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

export default Favourite;
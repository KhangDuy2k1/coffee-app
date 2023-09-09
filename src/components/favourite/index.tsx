import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../home/header';
import ProductList from "./List"
const Favourite = ({navigate}) => {
  return (
    <View style={styles.container}>
      <ProductList route={navigate}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});

export default Favourite;
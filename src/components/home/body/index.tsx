import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Search from './search';
import CategoryList from './category';
import ProductList from './ListAll';
import ProductListKm from './ListKm';
import SearchModal from '../../../modal/search';
import ProductListSearch from './listSearch';
import { useDispatch } from 'react-redux';
import { updateMessage } from '../../../store/userslice';
import { useEffect, useState } from 'react';
import socket from '../../../utils/socket';

export default function Body({navigation, init}) {
  const dispatch = useDispatch()
  useEffect(() => {
    socket.on('connection', () => {
      
    })
    socket.on("order-success-notifycation", async (param: string) => {
      dispatch(updateMessage(param))
    })
  }, [socket]); 

  return (
    <View style={styles.container}>
      {init && <SearchModal/>}
      {!init && <CategoryList/>}
      {!init ? <ProductList route={navigation}/> : <ProductListSearch route={navigation}/> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
  },
});
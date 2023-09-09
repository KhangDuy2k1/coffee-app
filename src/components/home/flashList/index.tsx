import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getToken, saveToken } from '../../../utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../../store/userslice';
import ImageList from '../../../modal/anima';
const Flast = () => {
    const dispatch = useDispatch();
    const Logout = async () => {
      dispatch(updateUsername(""));
      await AsyncStorage.removeItem('authToken');
    }
    const image = "https://cdn.popsww.com/blog/sites/2/2022/02/naruto-co-bao-nhieu-tap.jpg";
  return (
    <View style={styles.container}>
        <ImageList/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 150,
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingBottom: 5,
    backgroundColor: '#ffffff', // Màu nền của header
  },
});

export default Flast;
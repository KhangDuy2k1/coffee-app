import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import DetailScreen from './screens/detail';
import PaymentScreen from './screens/payment';
import FavouriteScreen from './screens/favourite';
import BottomTabNavigator from './BottomTabNavigator';
import DetailKmScreen from './screens/detailKm';
import PayScreen from './screens/pay';
import RegisterScreen from './screens/register';
import { getToken,  } from './utils/asyncStorage';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsername } from './store/userslice';
import Header from './components/home/header';
const Stack = createStackNavigator();
export default function MainStack() {
  const [userToken, setUserToken] = useState<string | null>();
  const username = useSelector(selectUsername);
  useEffect(() => {
    async function token() {
      const token = await getToken();
      setUserToken(token);
    }
    token();
  }, [username]);
  

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      
       {userToken ? (
       <>
        <Stack.Screen name="Tab" component={BottomTabNavigator}  options={{
    headerTitle: () => null, // Đặt tiêu đề thành trống
  }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="DetailKm" component={DetailKmScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
        <Stack.Screen name="Pay" component={PayScreen} />
       </>

  ) : (
    <>
     <Stack.Screen name="Login" component={LoginScreen} />
     <Stack.Screen name="Register" component={RegisterScreen} />
    </>
  )}
    </Stack.Navigator>

);
}

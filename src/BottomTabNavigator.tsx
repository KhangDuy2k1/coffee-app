import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import HomeScreen from './screens/home';
import PaymentScreen from './screens/payment';
import FavouriteScreen from './screens/favourite';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Thanh Toán') {
            return <MaterialIcons name="payment" size={size} color={color} />
          } else if (route.name === 'Yêu Thích') {
            return <AntDesign name="heart" size={size} color={color} />
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Thanh Toán" component={PaymentScreen} />
      <Tab.Screen name="Yêu Thích" component={FavouriteScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

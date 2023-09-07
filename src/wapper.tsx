import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import MainStack from './stack';

export default function Wrapper() {
  return (
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
  );
}

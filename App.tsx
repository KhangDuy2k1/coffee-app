import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'deprecated-react-native-prop-types';
import BottomTabNavigator from './src/BottomTabNavigator';
import MainStack from './src/stack';
import { store } from './src/store';
import { Provider } from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

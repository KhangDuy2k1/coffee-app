import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Body from './body';
import Flast from './flashList';
export default function Home({navigation, param}) {
  
  return (
    <View style={styles.container}>
      <Flast/>
      <Body navigation={navigation} init={param}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
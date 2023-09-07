import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';
import Body from './body';
export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header/>
      <Body navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffff',
    alignItems: 'center',
  },
});
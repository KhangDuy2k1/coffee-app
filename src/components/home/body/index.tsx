import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Search from './search';
import CategoryList from './category';
import ProductList from './ListAll';
import ProductListKm from './ListKm';
export default function Body({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Search/>
      <CategoryList/>
      <ProductList route={navigation}/>
      <ProductListKm route={navigation}/> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});
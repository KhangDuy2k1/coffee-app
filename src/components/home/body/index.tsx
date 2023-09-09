import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Search from './search';
import CategoryList from './category';
import ProductList from './ListAll';
import ProductListKm from './ListKm';
import SearchModal from '../../../modal/search';
export default function Body({navigation, init}) {
  return (
    <View style={styles.container}>
      {init && <SearchModal/>}
      <CategoryList/>
      <ProductList route={navigation}/>
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
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const products = [
  { id: '1', name: 'Cappuccino', price: 50000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '2', name: 'Cappuccino', price: 60000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '3', name: 'Cafe Mocha', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '4', name: 'Cafe Mocha', price: 30000,  isFavourite: true,  image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '5', name: 'Cafe Mocha', price: 40000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '6', name: 'Cafe Mocha', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '7', name: 'Product 1', price: 30000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '8', name: 'Product 1', price: 80000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  // Thêm các sản phẩm khác vào đây
];

const Body = () => {

  const renderItem = ({ item }) => (
    <View style={styles.product}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <View
          style={styles.productName}>
          <View>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={ {fontSize: 14}}>{item.name}</Text>
          </View>
          <View>
          <Text style={{fontSize: 14, fontWeight: 'bold', alignSelf: 'center'}}>{item.price} VND</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'red'}}>Đã Thanh Toán</Text>
          </View>
        
        </View>
      </View>
  );

  return (
    <View style={styles.containerProduct}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  containerProduct: {
    flex: 1,
    width: 370,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f2f2f2'
  },
  product: {
    flex: 1,
    borderRadius: 10,
    height: 140,
    backgroundColor: "#ffcc80",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderColor: '#cccccc',
  },
  productImage: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    borderRadius: 50,
  },
  productName: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: 10,
    fontSize: 14,
    color: '#21130d',
  },
  productPrice:{
    fontSize: 20,
    marginTop: 50,
    color: '#21130d',
  }
});

export default Body;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProductLike } from '../../../api/product';


const ProductList = () => {

  const [products, setProducts] = useState([{ id: '1', name: 'Espresso', price: 50000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '2', name: 'Espresso', price: 60000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '3', name: 'Espresso', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '4', name: 'Cappuccino', price: 30000,  isFavourite: true,  image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '5', name: 'Cappuccino', price: 40000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '6', name: 'Cappuccino', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '7', name: 'Cappuccino', price: 30000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '8', name: 'Cappuccino', price: 80000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const res = await getProductLike();
      }catch (error: any){
        setProducts([]);
      }
      
     
    }
    fetchProduct()
  },[]);
  const renderItem = ({ item }) => (
    <View style={styles.product}>
        <Image source={{uri: item.image}} style={styles.productImage} />
        <View style={styles.body}>
        <View
          style={styles.productName}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={ {fontSize: 14}}>{item.name}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 15}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        {/* <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 10 }}>
        <Icon
          name={item.isFavourite ? 'heart' : 'heart-o'}
          size={20}
          color={item.isFavourite ? 'red' : 'gray'}
        />
      </TouchableOpacity> */}
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
    width: 400,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f2f2f2'
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    elevation: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    backgroundColor: "#ffcc80",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  body: {
    marginLeft: 40,
    justifyContent: 'center'

  },

  productImage: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 10,
    //resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 50,
  },
  productName: {
    marginTop: 10,
    fontSize: 14,
    color: '#21130d',
  },
  productPrice:{
    fontSize: 20,
    marginTop: 50,
    color: '#21130d',
  },
  icon: {
    marginRight: 10,
    marginTop: 8,
    fontSize: 20,
    color: '#333333',
  },
});

export default ProductList;

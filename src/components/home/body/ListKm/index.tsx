import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { IProduct } from '../../../../types';
import { selectClick } from '../../../../store/userslice';
import { useSelector } from 'react-redux';
import { getProductDiscount } from '../../../../api/product';

const ProductListKm = ({route}) => {
  const [products, setProducts] = useState([{ id: '1', name: 'Espresso', price: 50000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '2', name: 'Espresso', price: 60000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '3', name: 'Espresso', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '4', name: 'Cappuccino', price: 30000,  isFavourite: true,  image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '5', name: 'Cappuccino', price: 40000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '6', name: 'Cappuccino', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '7', name: 'Cappuccino', price: 30000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '8', name: 'Cappuccino', price: 80000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },]);
  const click = useSelector(selectClick);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try{
        const res = await getProductDiscount();
      }catch (error: any){
        setProducts([]);
      }
      
     
    }
    fetchProduct()
  },[]);
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={()=>route.navigate('DetailKm')}>
      <Image source= {{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={click ? styles.containerClick : styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  containerClick: {
    display: 'none',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  productItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    //resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    marginTop: 8,
    fontSize: 14,
    color: '#333333',
  },
});

export default ProductListKm;

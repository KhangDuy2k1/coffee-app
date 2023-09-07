import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProduct } from '../../../../api/product'
import { useSelector } from "react-redux";
import { selectClick, selectCategory, selectSearch } from '../../../../store/userslice';
const products = [
  { id: '1', name: 'Americano', price: 50000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '2', name: 'Americano', price: 60000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '3', name: 'Cafe Latte', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '4', name: 'Cafe Mocha', price: 30000,  isFavourite: true,  image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '5', name: 'Americano', price: 40000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '6', name: 'Espresso', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '7', name: 'Cappuccino Viennese​', price: 30000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '8', name: 'Product 1', price: 80000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '9', name: 'Espresso', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '10', name: 'Espresso', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '11', name: 'Espresso', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },
  { id: '12', name: 'Espresso', price: 70000,  isFavourite: false, image: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg" },

  // Thêm các sản phẩm khác vào đây
];

const ProductList = ({route}) => {
  const category = useSelector(selectCategory);
  const search = useSelector(selectSearch);
  const click = useSelector(selectClick);
  const [data, setData] = useState([]);
  const handlePress = () => {
    route.navigate('Detail')
  };

  useEffect(() => {
    const fetchProduct = async () => {
      //const res = await getProduct();
    }
    fetchProduct()
  },[]);
  const productFilter: any = useMemo(() => {
    if(category !== '') {
      return products.filter(p => p.name === category)
    }
    return products.filter(p => p.name.includes(search))
  }, [category, search])
  const renderItem = ({ item }) => (
    <View style={click ? styles.productClick : styles.product}>
        <TouchableOpacity onPress={handlePress} >
          <Image source={{uri: item.image}} style={styles.productImage} />
        </TouchableOpacity>
        <View style={styles.body}>
        <View
          style={styles.productName}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={ {fontSize: 14}}>{item.name}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 15}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 10 }}>
        <Icon
          name={item.isFavourite ? 'heart' : 'heart-o'}
          size={20}
          color={item.isFavourite ? 'red' : 'gray'}
        />
      </TouchableOpacity>
        </View>
        </View>
      </View>
  );

  return (
    <View style={click ? styles.containerProductClick : styles.containerProduct} >
      <FlatList
        data={productFilter}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  containerProduct: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 230,
    backgroundColor: '#ffff99'
  },

  containerProductClick: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 320,
    backgroundColor: '#ffff99'
  },

  product: {
    width: 200,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#ffc266",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: '#cccccc',
  },

  productClick: {
    width: 250,
    elevation: 15,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ffc266",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: '#cccccc',
  },
  body: {
    flexDirection: 'column',
  },
  productImage: {
    width: 120,
    height: 120,
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

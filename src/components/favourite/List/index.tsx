import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProductLike } from '../../../api/product';


const ProductList = ({route}) => {

  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
   
    const fetchProduct = async () => {
      try{
        const res = await getProductLike();
        setData(res.listCoffeeLiked);
      }catch (error: any){
        setData([]);
        alert(error.response.data.mes)
      }

    }
    fetchProduct()
  },[]);
  const handlePress = (formDetail: any) => {
    route.navigate('Detail', { data: formDetail });
  };

  const renderItem = ({ item }) => {
    const formDetail: any = {
      id: item._id,
      image: item.image,
      name: item.name,
      price: item.price,
      starts: item.starts,
      volume: item.volume,
      category: item.category,
      desc: item.desc
    }
    return (
    <View style={styles.product}>
    <TouchableOpacity onPress={() => handlePress(formDetail)} >
      <Image source={{uri: item.image}} style={styles.productImage} />
    </TouchableOpacity>
    <View style={styles.body}>
    <View
      style={styles.productName}>
      <Text style={{fontWeight: 'bold', fontSize: 16, color: '#b37700',}}>{item.name}</Text>
      <Text style={ {fontSize: 14}}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price} vnd</Text>
    </View>
    </View>
  </View>
  )};

  return (
    <View style={styles.containerProduct}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  containerProduct: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  product: {
    width: "100%",
    elevation: 15,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: '#cccccc',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
  },
  productName: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
  },
  productPrice:{
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#21130d',
  },
});

export default ProductList;

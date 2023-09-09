import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProduct, likeById } from '../../../../api/product'
import { useSelector } from "react-redux";
import { selectClick, selectCategory, selectSearch } from '../../../../store/userslice';

const ProductList = ({route}) => {
  const category = useSelector(selectCategory);
  const search = useSelector(selectSearch);
  const click = useSelector(selectClick);
  const [data, setData] = useState<any[]>([]);
  const handlePress = (formDetail: any) => {
    route.navigate('Detail', { data: formDetail });
  };
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct();
      setData(res.allCoffee.allCoffee);
    }
    fetchProduct()
  },[]);
  const productFilter: any = useMemo(() => {
    if(category !== '') {
      return data.filter(p => p.category === category)
    }
    if(search !== '') {
      return data.filter(p => p.name.includes(search))
    }
    return data;
  }, [category, search])
   console.log(productFilter);
   const likeCoffee = async (id: string) => {
    console.log(id);
    try{
      const res = await likeById(id);
      if(res){
        alert(res.mes)
      }
    }catch(error){
      alert("Đã Like")
    }
   }
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
    return(
    <View style={styles.product}>
        <TouchableOpacity onPress={() => handlePress(formDetail) } >
          <Image source={{uri: item.image}} style={styles.productImage} />
        </TouchableOpacity>
        <View style={styles.body}>
        <View
          style={styles.productName}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={ {fontSize: 14}}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price} vnd</Text>
        </View>
    
        <TouchableOpacity style={styles.iconC}  onPress={() => likeCoffee(item._id) }>
        <Icon
          name={item.starts === 2 ? 'heart' : 'heart-o'}
          size={20}
          color={item.starts !== 2 ? 'red' : 'gray'}
        />
      </TouchableOpacity>
        </View>
      </View>
  )};

  return (
    <View style={styles.containerProduct} >
      <FlatList
        data={productFilter}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
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
    color: '#b37700',
  },
  productPrice:{
    fontSize: 15,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#21130d',
  },
  iconC: {
    alignSelf: 'center',
    marginRight: 10
  },
});

export default ProductList;

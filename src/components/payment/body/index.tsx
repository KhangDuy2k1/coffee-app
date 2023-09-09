import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getPayment } from '../../../api/payment';

const Body = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPayment = async () => {
      try{
        const res = await getPayment();
        setData(res.orders.order);
        
      }catch (error: any){
        if(error.response?.status === 400 && error.response?.data.success === false){
          alert("chưa thanh toán đơn hàng nào");
        }
      }
      
     
    }
    fetchPayment();
  },[]);
  const renderItem = ({ item }) => (
    <View style={styles.product}>
        <Image source={{uri: item.coffeeItem_id.image}} style={styles.productImage} />
        <View
          style={styles.productName}>
          <View>
          <Text style={{height: 20, fontWeight: 'bold', fontSize: 16, }}>{item.coffeeItem_id.name}</Text>
          <Text style={ {fontSize: 14}}>{item.coffeeItem_id.name}</Text>
          <Text style={{marginTop: 20,  fontSize: 14, fontWeight: 'bold', color: '#e6ccb3'}}>{item.coffeeItem_id.price} VND</Text>
          </View>
          <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 17, color: '#dfbf9f', alignSelf: 'center'}}>Số lượng : {item.quantity}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#a3a375', }}>Đã Thanh Toán</Text>
          </View>
        
        </View>
      </View>
  );

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
    width: 370,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#f2f2f2'
  },
  product: {
    flex: 1,
    borderRadius: 10,
    height: 140,
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
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
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 10,
    marginLeft: 20,
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

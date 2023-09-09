import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons'; 
import { getProductById } from '../../api/product';
import { getToken } from '../../utils/asyncStorage';
import { paymentApi } from '../../api/payment';
const Detail = ({navigation, data }) => {
  const [soluong, setSoluong] = useState<number>(0);
  const handlePaymentPress = async () => {
    if(soluong <= 0){
      return alert("chưa nhập sô lượng");
    }
    if(soluong > data.volume){
      return alert("nhập quá số lượng đang có");
    }
    const param: any= {
      "coffeeitem_id": data.id,
      "quantity": soluong,
      "total": soluong
    }
    try{
      const res = await paymentApi(param);
      if(res){
        alert(res.mes);
      }
    }catch(error){
      alert("thanh toán không thành công");
    }
  }
  const handlePlus = () => {
    const current: number = soluong + 1;
    setSoluong(current)
  }
  const handleMinus = () => {
    const current: number = soluong - 1;
    setSoluong(current)
  }
  
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1, width: "100%"}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28}  onPress={navigation.goBack}/>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={{uri: data.image}} style={{height: 220, width: 220, borderRadius: 30}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              Capuchino
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={data.starts === 2 ? 'red' : 'black'} size={25} />
              
            </View>
          </View>
          <Text style={style.detailsText}>
            {data.desc}
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            {/* <SecondaryButton title="Add To Cart" /> */}
            <Text style={style.text}>
            {data.price} vnd
          </Text>
          </View>
          <View style={style.sl}>
          <TouchableOpacity style={style.plus} onPress={handleMinus}>
          <AntDesign name="minus" size={20} color="#b37700" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: 'red'}}>{soluong}</Text>
          <TouchableOpacity style={style.minus} onPress={handlePlus}>
          <AntDesign name="plus" size={20} color="#b37700" />
          </TouchableOpacity>
          </View>
          <View style={style.containerButton}>
          <TouchableOpacity style={style.button1} onPress={handlePaymentPress} >
           <Text style={style.buttonText}>Thanh toán</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: '#e0e0d1',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: '#ffffb3',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: 'white',
  },
  text: {

    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    marginTop: 10,
  },
  icon: {
    marginTop: 10,
  },
  button1: {
    height: 45,
    width: "80%",
    backgroundColor: '#b37700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  sl: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  plus: {
    marginRight: 10
  },
  minus: {
    marginLeft: 10
  }
});

export default Detail;

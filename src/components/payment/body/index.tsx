import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { PaymentCancel, PaymentRecv, getPayment, } from '../../../api/payment';
import { MaterialIcons } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { review } from '../../../api/reviews';
import { refund } from '../../../api/wallet';
import ModalNoti from '../../../modal/nofi';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsModalVisible, updateisModalVisible} from '../../../store/userslice';
const Body = () => {
  const [data, setData] = useState([]);
  const [update, setupdate] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState<number>(0); // Điểm đánh giá ban đầu
  

  const handleRating = (stars:number) => {
    setRating(stars);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
  },);
  const handleCancelOrder = async (id:string, status: string) => {
    let res;
    try{
        if(status === "đã đặt hàng"){
          res = await PaymentCancel(id);
        }
        if(status === "đã thanh toán"){
           res = await refund(id);
        }
        if(res){
          if(update){
            setupdate(false);
          }else{
            setupdate(true);
          }
          alert(res.mes);
        }  
    }catch(error){
      alert("thanh toán không thành công");
    }
  }
    const danhgia = async (id: string) => {
      const faram: any = {
        'stars': rating
      }
      const res = await review(id,faram);
      if(res){
        toggleModal();
      }
    }
   
    const handleRevlOrder = async (id:string) => {
      try{
          const res = await PaymentRecv(id);
          if(res){
            if(update){
              setupdate(false);
            }else{
              setupdate(true);
            }
            toggleModal();
          }    
        
      }catch(error){
        alert("thanh toán không thành công");
      }
  }
  const renderItem = ({ item }) => {
    return (
      <View style={styles.product}>
      <Image source={{uri: item.coffeeItem_id.image}} style={styles.productImage} />
      <View
        style={styles.productName}>
        <View>
        <Text style={{height: 20, fontWeight: 'bold', fontSize: 16, }}>{item.coffeeItem_id.name}</Text>
        <Text style={ {fontSize: 14}}>{item.coffeeItem_id.name}</Text>
        <Text style={{marginTop: 5, fontSize: 17, color: '#dfbf9f', alignSelf: 'center'}}>Số lượng : {item.quantity}</Text>
        <Text style={{marginTop: 5,  fontSize: 14, fontWeight: 'bold', color: '#ffdb4d'}}>{item.coffeeItem_id.price} VND</Text>
        </View>
        <View style={{marginLeft: 20, width: 100}}>
        <Text style={item.status === "đã hủy" ? styles.statusDaHuy : styles.status}>{item.status}</Text>
        {item.status !== "giao hàng thành công"  && item.status !== "đã hủy" && <>
         <View>
         <TouchableOpacity style={styles.button1} onPress={() => {
          handleCancelOrder(item._id, item.status)}} >
             <MaterialIcons style={{marginLeft: 10}} name="cancel" size={20} color="#ffc266" />
             <Text style={styles.buttonText1}>Hủy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => handleRevlOrder(item._id)} >
             <MaterialIcons style={{marginLeft: 10}} name="done" size={20} color="#ffc266" />
             <Text style={styles.buttonText1}>Nhận</Text>
          </TouchableOpacity>
         </View>
        </>
        }
        </View>
      
      </View>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.7}
        onBackdropPress={toggleModal}
        style={{ justifyContent: 'center', alignItems: 'center'}}
      >
        <View style={{ backgroundColor: 'white', padding: 20, height: '25%', width: '70%', borderRadius: 10}}>
      <View>
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }} >Đánh giá sản phẩm:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handleRating(star)}
          >
            <Icon
              name={star <= rating ? 'star' : 'star-o'}
              size={30}
              color="gold"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 25}}>
      <TouchableOpacity  onPress={toggleModal}>
            <Text style={{ color: 'red' }}>Thoát</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => danhgia(item.coffeeItem_id._id)}>
            <Text style={{ color: 'red' }}>Đánh Giá</Text>
          </TouchableOpacity>
      </View>
          
        </View>
      </Modal>
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
  },
  buttonText1: {
    marginLeft: 15,
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  button1: {
    marginTop: 10,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9b38c',
    borderRadius: 10,
  },
  button2: {
    marginTop: 10,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d9b38c',
    borderRadius: 10,
  },
  status: {
    fontSize: 15, fontWeight: 'bold', color: '#a3a375',alignSelf: 'center', width: 120, textAlign:"center"
  },
  statusDaHuy: {
    fontSize: 17, fontWeight: 'bold', color: 'red',alignSelf: 'center',
  }
});

export default Body;

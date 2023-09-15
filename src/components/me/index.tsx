import React, { useEffect, useMemo, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import { register } from '../../api/register';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectInfo } from '../../store/userslice';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons'; 
import { createWallet, getWallet, recharge } from '../../api/wallet';
import { getUser } from '../../api/info';
const Me = ({navigation, param}) => {
   const info = useSelector(selectInfo);
   const [wallet, setWallet] = useState<boolean>(false);
   const [user, setUser] = useState<any>();
   const [count, setCount] = useState();
   const [money, setMoney] = useState<string>();
   const [isModalVisible, setModalVisible] = useState(false);
   const [isValidMoney, setIsValidMoney] = useState(true);
   const [update, setupdate] = useState(true);
   useEffect(() => {
      async function fetchApi() {
       try{
        const res = await getWallet();
        if(res){

            setCount(res.wallet.amountMoney)

            setWallet(true)
        }
       } catch(error) {
        setWallet(false);
       }
      } 
      fetchApi()
   },)


   useEffect(() => {
      async function fetchApi() {
       try{
        const res = await getUser();
        if(res){
         setUser(res.user)
        }
       } catch(error) {
        
       }
      } 
      fetchApi()
   },[])

   const up = useMemo(async () => {
    try{
        const res = await getWallet();
        if(res){
            setCount(res.wallet.amountMoney)
        }
       } catch(error) {

       }
   }, [update])

   const sw = useMemo(() => {
    if(wallet && isModalVisible){
        return true
    }
    return false
   }, [wallet,isModalVisible ])
   const validateEmail = (text: string) => {
    let isValid  = true;
    if(text !== ""){
        const currencyPattern = /^\d+(\.\d{1,2})?$/;
        isValid =  currencyPattern.test(text); 
    }
  
    setMoney(text);
    setIsValidMoney(isValid);
  };
   const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
   const CreateWallet = async () => {
    try{
        const res = await createWallet();
        if(res){
            alert("Tạo thành công")
            toggleModal()
        }

       } catch(error) {
       }
   }

   const Depo = async () => {
    let count = 0
    if(money){
       count = parseInt(money, 10)
    }
    if(count) {
    }else{
        return alert('số tiền phải lớn hơn 0') 
    }
    const faram: any = {
        "money": count
    }
    try{
        const res = await recharge(faram);
        if(res){
            alert("nạp tiền thành công")
            setupdate(!update);
            toggleModal()
        }

       } catch(error) {
       }

   }
   const ModalDeWallet = () => {
     return (
        <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.7}
        onBackdropPress={toggleModal}
        style={{ justifyContent: 'center', alignItems: 'center'}}
      >
        <View style={{ backgroundColor: 'white', padding: 20, height: '35%', width: '80%', borderRadius: 10}}>
      <View>
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }} >Nạp Tiền</Text>
      <View style={styles.input}>
         <MaterialIcons  style={styles.icon} name="attach-money" size={14} color="#b37700" />
         <TextInput
           placeholder="nhập số tiền"
           value={money}
           onChangeText={validateEmail}
          />
         </View>
        {!isValidMoney && <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 10, color: 'red'}}>Nhập sai cú pháp</Text>}
          </View>
          <TouchableOpacity style={styles.buttonMd} onPress={Depo}>
               <Text style={styles.buttonTexMd}>Nạp</Text>
             </TouchableOpacity>
        </View>
      </Modal>
     )
   }

   const ModalCreateWallet = () => {
    return (
       <Modal
       isVisible={isModalVisible}
       backdropOpacity={0.7}
       onBackdropPress={toggleModal}
       style={{ justifyContent: 'center', alignItems: 'center'}}
     >
       <View style={{ backgroundColor: 'white', padding: 20, height: '25%', width: '80%', borderRadius: 10}}>
     <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }} >Tạo Ví</Text>
     <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
     <TouchableOpacity style={styles.buttonMd} onPress={CreateWallet}>
              <Text style={styles.buttonTexMd}>Tạo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMd} onPress={toggleModal}>
              <Text style={styles.buttonTexMd}>Hủy</Text>
            </TouchableOpacity>
     </View>
         
       </View>
     </Modal>
    )
  }
  return (
    <View style={styles.container}>
        <Image source={{uri: user?.avatar ?? ''}} style= {styles.image}/>
        <View style = {styles.info}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10, color: '#c68c53'}}>Thông tin cá nhân</Text>
            <View style={styles.text}>
            <Text style={{color: '#aa80ff', fontSize: 20,}}>Email: </Text>
            <Text style={{color: '#ff4dd2', fontSize: 20,}}>{user?.email}</Text>
            </View>
            <View style={styles.text}>
            <Text style={{color: '#aa80ff', fontSize: 20,}}>Số Điện Thoại: </Text>
            <Text style={{color: '#ff4dd2', fontSize: 20,}}>{user?.phonenumber}</Text>
            </View>
            <View style={styles.text}>
            <Text style={{color: '#aa80ff', fontSize: 20,}}>Số tiền dư: </Text>
            <Text style={{color: '#ff4dd2', fontSize: 20,}}>{count} Vnd</Text>
            </View>
            {!wallet ?
              <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>Tạo Ví</Text>
             </TouchableOpacity> : 
             <TouchableOpacity style={styles.button} onPress={toggleModal}>
               <Text style={styles.buttonText}>Nạp Tiền</Text>
             </TouchableOpacity>}
             { !sw ? ModalCreateWallet() : ModalDeWallet() }
        </View>
          
    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center"
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#e0e0d1',
    borderRadius: 20
  },
  text: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginTop: 10,
    height: 30,
    //backgroundColor: 'red',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  button: {
    height: 45,
    width: "30%",
    backgroundColor: '#ac7339',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 30,
  },
  input: {
    flexDirection: 'row',
    height: 40,
    width: "90%",
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#b37700',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 10,
  },
  buttonTexMd: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
  },
  buttonMd: {
    height: 45,
    width: "40%",
    backgroundColor: '#ac7339',
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default Me;

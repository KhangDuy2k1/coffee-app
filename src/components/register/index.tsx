import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import { register } from '../../api/register';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Registration = ({navigation}) => {
  const [password, setPassword] = useState('');

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (text: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const isValid = emailRegex.test(text);
    setEmail(text);
    setIsValidEmail(isValid);

  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const validatePhoneNumber = (text: string) => {
    setPhoneNumber(text);
  };

  const handleRegister = async () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const isValid = emailRegex.test(email);
    const currencyPattern = /^\d+(\.\d{1,2})?$/;
    const isValidNumber =  currencyPattern.test(phoneNumber); 
    if(!isValid){
      alert('email không đúng định dạng')
    }
    if(!isValidNumber){
      alert('số không đúng định dạng')
    }
    const pararm = {
      "email": email,
      "password": password,
      "phonenumber": phoneNumber
    };
    try {
      let res = await register(pararm);
      if (res) {
        alert(res.mes);
      }
    } catch (error: any) {
    }
  };

  const handleLogin = async () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
         <Image source= {{uri: "https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg"}} style={styles.image} />
         <Text style={styles.login}>Đăng Ký Tài Khoản</Text>

         <View style={styles.inputPhone}>
         <AntDesign style={styles.icon} name="phone" size={14} color="#b37700" />
         <TextInput style = {{ width: '100%', height: '100%'}}
           placeholder="Số điện thoại" 
           value={phoneNumber}
           onChangeText={setPhoneNumber}
          />
         </View>
         <View style={styles.inputEmail}>
         <AntDesign style={styles.icon} name="user" size={14} color="#b37700" />
         <TextInput style = {{ width: '100%', height: '100%'}}
           placeholder="Email"
           value={email}
           onChangeText={setEmail}
          />
         </View>
         {!isValidEmail && <Text>Email không đúng định dạng</Text>}
         <View style={styles.inputPass}>
         <MaterialCommunityIcons style={styles.icon} name="form-textbox-password" size={14} color="#b37700" />
         <TextInput style = {{ width: '100%', height: '100%'}}
           placeholder="Mật khẩu"
           secureTextEntry
           value={password}
           onChangeText={setPassword}
          />
         </View>
        
         <TouchableOpacity style={styles.button} onPress={handleRegister}>
           <Text style={styles.buttonText}>Đăng Ký</Text>
          </TouchableOpacity>
         <View style={styles.bottom}>
         <Text>|</Text>
         <TouchableOpacity onPress={handleLogin}>
         <Text style={styles.textR}>Đăng Nhập</Text>
         </TouchableOpacity>
         </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    marginTop: 40,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  login: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b37700'
  },
  inputPhone: {
    flexDirection: 'row',
    height: 40,
    width: 300,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#b37700',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 12,
  },
  inputEmail: {
    flexDirection: 'row',
    height: 40,
    width: 300,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#b37700',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 12,
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 30,
    width: 300,
    borderWidth: 1,
    borderColor: '#b37700',
    borderRadius: 30,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 10,
  },
  button: {
    height: 45,
    width: 300,
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
  bottom: {
    marginTop: '30%',
    width: "100%",
    flexDirection: 'row',
    justifyContent:"space-between",
  },
  textL: {
    marginLeft: 10,
    alignSelf: 'flex-start',
    color: '#b37700'
  },
  textR: {
    marginRight: 10,
    alignSelf: 'flex-end',
    color: '#b37700'
  },
  text: {
    
    color: '#b3ff66',
  },
});

export default Registration;

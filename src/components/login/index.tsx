import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, SafeAreaView } from 'react-native';
import { login } from '../../api/login';
import { saveToken, saveTokenRf, getToken, getTokenRf, saveIdUser, saveListLike } from '../../utils/asyncStorage';
import { updateUsername } from '../../store/userslice';
import { useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Login = ({route} ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const param: any = {
      "email": username,
      "password": password
    }
    try {
      let res = await login(param);
      if (res) {
        await saveToken(res.accessToken);
        await saveTokenRf(res.refreshToken);
        await saveIdUser(res.user._id);
        await saveListLike(res.user.likedCoffeeItem);
        dispatch(updateUsername(res.accessToken));
      }
    } catch (error: any) {
      alert("Đăng nhập có vấn đề");
    }
  };

  const handleRegister = () => {
    route.navigate('Register')
  };

  return (

    <SafeAreaView style={styles.container}>
         <Image source= {{uri: "https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg"}} style={styles.image} />
         <Text style={styles.login}>Đăng Nhập</Text>
         <View style={styles.inputEmail}>
         <AntDesign style={styles.icon} name="user" size={14} color="#b37700" />
         <TextInput
           placeholder="Tên đăng nhập"
           value={username}
           onChangeText={setUsername}
          />
         </View>
         <View style={styles.inputPass}>
         <MaterialCommunityIcons style={styles.icon} name="form-textbox-password" size={14} color="#b37700" />
         <TextInput
           placeholder="Mật khẩu"
           secureTextEntry
           value={password}
           onChangeText={setPassword}
          />
         </View>
        
         <TouchableOpacity style={styles.button} onPress={handleLogin}>
           <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
         <View style={styles.bottom}>
        <TouchableOpacity>
         <Text style={styles.textL}>Quên mật Khẩu</Text>
         </TouchableOpacity>
         <Text>|</Text>
         <TouchableOpacity onPress={handleRegister}>
         <Text style={styles.textR}>Tạo Tài Khoản mới</Text>
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
  inputEmail: {
    flexDirection: 'row',
    height: 40,
    width: "80%",
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
    width: "80%",
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

export default Login;

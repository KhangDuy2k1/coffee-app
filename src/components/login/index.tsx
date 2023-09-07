import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { login } from '../../api/login';
import { saveToken, saveTokenRf, getToken, getTokenRf } from '../../utils/asyncStorage';
import { updateUsername } from '../../store/userslice';
import { useDispatch } from 'react-redux';
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
    <ImageBackground
    source={{uri: 'https://banner2.cleanpng.com/20190204/abf/kisspng-white-coffee-cafe-espresso-coffee-cup-in-house-service-support-connect-vending-5c585865ce4cb1.073233151549293669845.jpg'}} // Điều chỉnh đường dẫn tới hình ảnh của bạn
    style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.buttonDk} onPress={handleRegister}>
      <Text style={styles.text}>Đăng Ký</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    color: '#ffad33',
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#ffad33',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#b3ff66',
    fontSize: 16,
  },
  text: {
    color: '#b3ff66',
  },
  buttonDk: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  }
});

export default Login;

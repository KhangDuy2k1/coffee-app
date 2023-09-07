import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { register } from '../../api/register';
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
      alert(error.response?.data.mes);
    }
  };

  const handleLogin = async () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
    source={{uri: 'https://banner2.cleanpng.com/20190204/abf/kisspng-white-coffee-cafe-espresso-coffee-cup-in-house-service-support-connect-vending-5c585865ce4cb1.073233151549293669845.jpg'}} // Điều chỉnh đường dẫn tới hình ảnh của bạn
    style={styles.backgroundImage}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Ký Tài Khoản</Text>
      <TextInput
        style={styles.input}
        placeholder="Số Điện Thoại"
        placeholderTextColor='#bb99ff'
        value={phoneNumber}
        onChangeText={text => validatePhoneNumber(text)}
      />
       {!isValidPhoneNumber && (
        <Text style={styles.errorText}>Please enter a valid phone number</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor='#bb99ff'
        value={email}
        onChangeText={validateEmail}
      />
      {!isValidEmail && (
        <Text style={styles.errorText}>Please enter a valid email address</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Mật Khẩu"
        placeholderTextColor='#bb99ff'
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng Ký</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonD} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flex: 1,
    justifyContent: 'center', 
  },
  title: {
    color: '#ffad33',
    fontSize: 24,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#a6ff4d'
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#ffad33',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonD: {
    marginTop: 10,
    backgroundColor: '#ffad33',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#b3ff66',
    fontSize: 16,
  },
});

export default Registration;

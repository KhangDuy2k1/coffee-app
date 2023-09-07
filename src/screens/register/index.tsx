import React from 'react';
import { View, Text } from 'react-native';
import Registration from '../../components/register';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Registration navigation= {navigation}/>
    </View>
  );
};

export default RegisterScreen;
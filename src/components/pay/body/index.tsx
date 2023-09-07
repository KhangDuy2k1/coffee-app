import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Body = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source={{uri: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg"}} style={{marginTop: 10, height: 110, width: 110, borderRadius: 30, alignSelf: 'center'}} />
      <View style={styles.text}>
      <Text>Capuchino</Text>
      <Text>Je de shi mo na ken ta chi pa no end ko re ne la de pha shit adf kjsfe  eadf e ahsfue à hueahdf</Text>
      </View>
    </View>
    <View style={styles.body}>
      <View style={styles.text1}>
        <Text>Áp dụng mã giảm giả</Text>
      </View>
      <View style={styles.text2}>
      <Text>Phương thức thanh toán</Text>
      </View>
    </View>
    <View style={styles.bottom}>
      <Text>85,000</Text>
      <Text>Thanh Toán</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
  
    },
    header: {
      marginTop: 10,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#Dde5e8',
      borderRadius: 10,
    },
    text: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: 'bold',
    },

    body: {
      marginTop: 20,
    },
    text1: {
      height: 30,
      backgroundColor: '#Dde5e8',
    },
    text2: {

    },

    bottom: {

    }
  });
export default Body;
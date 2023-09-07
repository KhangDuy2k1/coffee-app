import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Detail = ({navigation}) => {
  const handlePaymentPress = () => {
  }
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
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
          <Image source={{uri: "https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg"}} style={{height: 220, width: 220, borderRadius: 30}} />
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
              <Icon name="favorite-border" color='#ffc266' size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            {/* <SecondaryButton title="Add To Cart" /> */}
            <Text style={style.text}>
             50000 vnd
          </Text>
          </View>
          <View style={style.containerButton}>
          <Button
        title="Payment"
        onPress={handlePaymentPress}
        color="#3498db"
        style={style.button}
      />
      <Icon
        name="payment"
        size={24}
        color="#3498db"
        style={style.icon}
      />
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
    backgroundColor: '#ffc266',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: 'white',
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
});

export default Detail;

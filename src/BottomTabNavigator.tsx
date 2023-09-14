import React, { useEffect, useState } from 'react';
import {Image, View, Text, TouchableOpacity} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons'; 
import HomeScreen from './screens/home';
import PaymentScreen from './screens/payment';
import FavouriteScreen from './screens/favourite';
import MeScreen from './screens/me';
import { selectInfo, selectIsModalVisible, selectIsModalVisibleOut, updateisModalVisible, updateisModalVisibleOut } from './store/userslice';
import { getUser } from './api/info';
const Tab = createBottomTabNavigator();

  

const Icon = () => {
  const [user, setUser] = useState<any>();
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
  const dispatch = useDispatch();
    const visible = useSelector(selectIsModalVisible);
    const visibleOut = useSelector(selectIsModalVisibleOut);
    const toggleModalNoti = () => {
      dispatch(updateisModalVisible(!visible))
    };
    const toggleModalOut = () => {
      dispatch(updateisModalVisibleOut(!visibleOut))
    };

    const info = useSelector(selectInfo);

  return (
    <View style= {{ flexDirection: 'row', width: 350,  alignItems: 'center', justifyContent: "space-between"}}>
      <TouchableOpacity onPress={toggleModalOut}>
      
       <Image source= {{uri: user?.avatar}} style={{width: 40, height: 40, borderRadius: 100, }} />
       </TouchableOpacity>
       <Text style={{fontSize: 16, fontWeight: 'bold'}}>Trang Trủ</Text>
       <TouchableOpacity style={{width: 40, height: 40, borderRadius: 100, alignItems: 'center', flexDirection: 'row'}} onPress={toggleModalNoti}>
        <MaterialIcons
        
        name="notifications"
        size={24}
        color="#333333"
      />
        </TouchableOpacity>
    </View>
   
    
  )
}

const Noti = () => {
  return (
    <Image source= {{uri: "https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg"}} style={{width: 40, height: 40, borderRadius: 100}} />
  )
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tìm Kiếm') {
            return <MaterialIcons name="search" size={size} color={color} />
          } else if (route.name === 'Thanh Toán') {
            return <MaterialIcons name="payment" size={size} color={color} />
          } else if (route.name === 'Yêu Thích') {
            return <AntDesign name="heart" size={size} color={color} />
          } else if (route.name === 'Cá Nhân') {
            return <AntDesign name="user" size={size} color={color} />
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeScreen} initialParams={{ param: false }}  options={{
        headerTitle: (props) => <Icon {...props} />, // Hiển thị phần nội dung ở trên cùn
        headerTitleAlign: 'left',
      }}/>
      <Tab.Screen name="Tìm Kiếm" component={HomeScreen} initialParams={{ param: true }}/>
      <Tab.Screen name="Thanh Toán" component={PaymentScreen} />
      <Tab.Screen name="Yêu Thích" component={FavouriteScreen} />
      <Tab.Screen name="Cá Nhân" component={MeScreen} initialParams={{ param: true }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

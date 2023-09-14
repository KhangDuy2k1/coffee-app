import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, DevSettings } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { updateisModalVisible, selectIsModalVisible, selectIsModalVisibleOut, updateisModalVisibleOut, updateUsername} from '../../store/userslice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModaLogOut= () => {
    const isModalVisibleOut = useSelector(selectIsModalVisibleOut);
    const dispatch = useDispatch();
    const toggleModal = () => {
        dispatch(updateisModalVisibleOut(!isModalVisibleOut))
    }
    const Logout = async () => {
        dispatch(updateUsername(""));
        await AsyncStorage.removeItem('authToken');
        DevSettings.reload();
      }
    return (
       <Modal
       isVisible={isModalVisibleOut}
       backdropOpacity={0.7}
       onBackdropPress={toggleModal}
       style={{ justifyContent: 'center', alignItems: 'center'}}
     >
       <View style={{ backgroundColor: 'white', padding: 20, height: '15%', width: '50%', borderRadius: 10}}>
       <View>
       <TouchableOpacity style={styles.button} onPress={Logout}>
           <Text style={styles.buttonText}>Đăng xuất</Text>
          </TouchableOpacity>
       </View>
        
       </View>
     </Modal>
    )
  }
  const styles = StyleSheet.create({
    button: {
        height: 40,
        width: "100%",
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#b37700',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,

      },
      buttonText: {
        textAlign: 'center',
        width: "100%",
        alignSelf: 'center',
        color: 'white',
        fontSize: 12,
      },
  })
  export default ModaLogOut;
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { updateisModalVisible, selectIsModalVisible, updateMessage, selectMessage} from '../../store/userslice';
import socket from '../../utils/socket';

const ModalNoti= () => {
    const isModalVisible = useSelector(selectIsModalVisible);
    const listMessage:any[] = useSelector(selectMessage);
    const dispatch = useDispatch();
    const toggleModal = () => {
        dispatch(updateisModalVisible(!isModalVisible))
    }

    const renderItem =  ({ item }) => {
        return(
            <Text style= {{ textAlign:'center', marginTop: 10, fontSize: 14, backgroundColor: '#ffb3ff',}}>{item}</Text>
      )};
    return (
       <Modal
       isVisible={isModalVisible}
       backdropOpacity={0.7}
       onBackdropPress={toggleModal}
       style={{ justifyContent: 'center', alignItems: 'center'}}
     >
       <View style={{ backgroundColor: 'white', padding: 20, height: '55%', width: '80%', borderRadius: 10}}>
       <Text style= {{ textAlign:'center', marginTop: 5, fontSize: 20, color: 'red'}}>Thông báo</Text>
       <View style= {{marginTop: 20, height: '80%'}}>
      <FlatList
        data={listMessage}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
       </View>
        
       </View>
     </Modal>
    )
  }
  const styles = StyleSheet.create({})
  export default ModalNoti;
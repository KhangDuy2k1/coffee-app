import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import Home from '../../components/home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from "react-redux";

import { AntDesign } from '@expo/vector-icons'; 
import { updateClick, updateSearch } from '../../store/userslice';
const SearchModal = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const handlePress = () => {
        dispatch(updateSearch(text));
        dispatch(updateClick(''));
      }
  return (
    <View style={styles.container}>
         <View style={styles.input}>
         <TextInput
           placeholder="Tìm Kiếm"
           value={text}
           onChangeText={setText}
          />

        <TouchableOpacity style={styles.searchIcon} onPress={handlePress}>
             <MaterialCommunityIcons
              style={styles.icon}
             name="magnify"
             size={24}
             color="#8a8a8a"
          />
    </TouchableOpacity>
    </View> 
    </View>

    
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    input: {
        flexDirection: 'row',
        height: 40,
        width: 350,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#b37700',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 30,
        paddingHorizontal: 12,
      },
      searchIcon: {
        width: 40,
        alignSelf: 'center',
      },
      icon: {
        alignSelf: 'center'
      }
})
export default SearchModal;
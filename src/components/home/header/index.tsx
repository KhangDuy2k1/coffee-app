import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getToken, saveToken } from '../../../utils/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../../store/userslice';
const Header = () => {
    const dispatch = useDispatch();
    const Logout = async () => {
      dispatch(updateUsername(""));
      await AsyncStorage.removeItem('authToken');
    }
    const image = "https://cdn.popsww.com/blog/sites/2/2022/02/naruto-co-bao-nhieu-tap.jpg";
  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.avatarContainer} onPress={Logout}>
          <Image
            source= {{uri: image}}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.notificationIconContainer}>
        <MaterialIcons
        name="notifications"
        size={24}
        color="#333333"
        style={styles.notificationIcon}
      />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: '#ffffff', // Màu nền của header
    borderBottomWidth: 1,
  },
  leftContainer: {
    flex: 1,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  notificationIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    marginRight: 8,
  },
  // Các kiểu dáng khác có thể được thêm vào đây
});

export default Header;
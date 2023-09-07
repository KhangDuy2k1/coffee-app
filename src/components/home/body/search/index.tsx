import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { updateSearch, updateClick } from '../../../../store/userslice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(updateSearch(inputValue));
    dispatch(updateClick(''));
  }
  const handleInputChange = (text:string) => {
    dispatch(updateSearch(text));
    // Thêm mã lệnh bạn muốn thực hiện khi giá trị thay đổi ở đây
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Search..."
          placeholderTextColor="#8a8a8a"
        />
      </View>
      <TouchableOpacity style={styles.searchIconContainer} onPress={handlePress}>
      <MaterialCommunityIcons
          name="magnify"
          size={24}
          color="#8a8a8a"
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  searchInputContainer: {
    flex: 1,
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333333',
  },
  searchIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    //resizeMode: 'contain',
  },
  // Các kiểu dáng khác có thể được thêm vào đây
});

export default Search;

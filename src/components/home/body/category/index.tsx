import React , { useState, useMemo, useEffect }from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ICategory } from '../../../../types/index';
import { useDispatch } from "react-redux";
import { selectCategory, updateCategory, updateClick } from '../../../../store/userslice';
import { useSelector } from 'react-redux';
import { selectClick } from '../../../../store/userslice';
import { getCategory } from '../../../../api/category';
const categories: ICategory[] = [
  { id: '1', title: 'Cafe truyền thống' },
  { id: '2', title: 'Espresso' },

];



const CategoryList = () => {
  const [id, setId] = useState(null);
  const click = useSelector(selectClick);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handlePress = (item: any) => {
    setId(item.id);
    dispatch(updateClick(item.title));
    dispatch(updateCategory(item._id));
  };
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await getCategory();
      setData(res.allcategory);
    }
    fetchCategory()
  },[]);
  const renderItem = ({ item }) => {
    const sameId = item.id === id; 
    return (
    <TouchableOpacity onPress={() => handlePress(item)}  style={sameId && click ? styles.categoryItemClick : styles.categoryItem}>
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  )};

  return (
    <View style={styles.containerCate}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCate: {
    width: 350,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    height: 60,
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 12,
    backgroundColor: '#c2c2a3',
    borderRadius: 20,
  },
  categoryItemClick: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 12,
    backgroundColor: '#e69900',
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default CategoryList;

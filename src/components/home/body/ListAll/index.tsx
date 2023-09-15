import React, { useMemo, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, DevSettings } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getProduct, likeById, unLikeById } from '../../../../api/product'
import StarRating from 'react-native-star-rating';
import { useDispatch, useSelector } from "react-redux";
import { selectClick, selectCategory, selectSearch, selectUp, updateUp } from '../../../../store/userslice';
import { getStars } from '../../../../api/reviews';
import { deleteListLike, getListLike, saveListLike } from '../../../../utils/asyncStorage';

const ProductList = ({route}) => {
  const dispatch = useDispatch();
  const up = useSelector(selectUp);
  const category = useSelector(selectCategory);
  const search = useSelector(selectSearch);
  const click = useSelector(selectClick);
  const [data, setData] = useState<any[]>([]);
  const [update, setUpdate] = useState(false);
  const [change, setChange] = useState<string>();
  const [likes, setLikes] = useState<any[] | null>([]);
  const handlePress = (formDetail: any) => {
    
    route.navigate('Detail', { data: formDetail });
  };
  const [pick, setPick] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      const list = await getListLike();

      if(list !== null){

        setLikes(JSON.parse(list));
      }
      const res = await getProduct();
      setData(res.allCoffee.allCoffee);
      setChange("check");
    }
    fetchProduct()
  },[]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct();
      console.log(res.allCoffee.allCoffee);
      setData(res.allCoffee.allCoffee);
      setUpdate(!update);
    }
    fetchProduct()
  }, [up]);
  const productFilter: any = useMemo(() => {
    if(category !== '' && click) {
      return data.filter(p => p.category._id === category)

    }
    return data;
  }, [change, category, click, up])
   const handlePick = () => {
      if(pick){
        setPick(false);
      }
      else setPick(true);
   }
   const likeCoffee = async (id: string) => {
    let res;
    try{
      if(likes?.includes(id)){
        res = await unLikeById(id);
        
        if(res){
          let list = likes.filter(e => e !== id);

          setLikes(list);
          deleteListLike().then(async () => {
            saveListLike(list).then(async () => {
              route.replace('Tab')
            });
          });
          alert(res.mes)
        }
      }else {
        res = await likeById(id);
        if(res){
          const list: string[] = likes ?? [];
          list.push(id)
          setLikes(list);

          deleteListLike().then(async () => {
            saveListLike(likes).then(async () => {
              route.replace('Tab')
            });
          });
          alert(res.mes)
        }
      }
      
    }catch(error){
      
    }
   }
  const renderItem =  ({ item }) => {
    const formDetail: any = {
      id: item._id,
      image: item.image,
      name: item.name,
      price: item.price,
      starts: item.starts,
      like: likes?.includes(item._id),
      volume: item.volume,
      category: item.category,
      desc: item.desc
    }
    return(
    <View style={styles.product}>
        <TouchableOpacity onPress={() => handlePress(formDetail) } >
          <Image source={{uri: item.image}} style={styles.productImage} />
        </TouchableOpacity>
        <View style={styles.body}>
        <View
          style={styles.productName}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={ {fontSize: 14, color: '#d9b38c'}}>{item.name}</Text>
          <Text style={styles.productVolume}>{item.volume} mil</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={item.stars} // Điểm đánh giá sản phẩm
            fullStarColor={'gold'} // Màu ngôi sao đầy
            emptyStarColor={'gray'} // Màu ngôi sao trống
            starSize={15} // Kích thước ngôi sao
            containerStyle={{ width: 80 }}
      />
          <Text style={styles.productPrice}>{item.price} vnd</Text>
        </View>
    
        <TouchableOpacity style={styles.iconC}  onPress={() => likeCoffee(item._id) }>
        <Icon
          name={likes?.includes(item._id) ? 'heart' : 'heart-o'}
          size={20}
          color={likes?.includes(item._id) ? 'red' : 'gray'}
        />
      </TouchableOpacity>
        </View>
      </View>
  )};

  return (
    <View style={styles.containerProduct} >
      <FlatList
        data={productFilter}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  containerProduct: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  product: {
    width: "100%",
    elevation: 15,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderColor: '#cccccc',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
  },
  productName: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
    color: '#b37700',
  },
  productPrice:{
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#21130d',
  },
  productVolume: {
    fontSize: 15,
    marginTop: 5,
    color: '#21130d',
  },
  iconC: {
    alignSelf: 'center',
    marginRight: 10
  },
});

export default ProductList;

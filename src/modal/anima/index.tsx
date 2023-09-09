import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ImageList = () => {
  const flatListRef = useRef(null);
  const [images, setImages] = useState([
    { id: '1', uri: 'https://cdn.tgdd.vn/Files/2021/11/15/1397993/ca-phe-nam-mushroom-coffee-la-gi-loi-ich-cua-ca-phe-nam-202111150709063706.jpg'},
    { id: '2', uri: "https://etimg.etb2bimg.com/thumb/msid-94574753,width-1200,height-900,resizemode-4/.jpg"},
    { id: '3', uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmRkI8HPorXQfbYk_LUCt4slR8UDFutlQKg&usqp=CAU"},
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );

      // Cuộn đến index tiếp theo
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }, 1000); // Thời gian chuyển đổi giữa các hình ảnh (ở đây là 2 giây)

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image  source={{uri: item.uri}} style={styles.image} />
        )}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        initialScrollIndex={0}
        initialNumToRender={images.length}
        maxToRenderPerBatch={images.length}
        windowSize={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: 200, // Điều này phụ thuộc vào tỷ lệ khung hình của bạn
  },
});

export default ImageList;

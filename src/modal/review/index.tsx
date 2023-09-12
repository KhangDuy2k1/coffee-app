import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = () => {
  const [rating, setRating] = useState<number>(0); // Điểm đánh giá ban đầu

  const handleRating = (stars:number) => {
    setRating(stars);
  };

  return (
    <View>
      <Text>Đánh giá sản phẩm:</Text>
      <View style={{ flexDirection: 'row' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handleRating(star)}
          >
            <Icon
              name={star <= rating ? 'star' : 'star-o'} // Hiển thị sao đầy hoặc trống dựa trên điểm đánh giá
              size={30}
              color="gold"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
export default StarRating;
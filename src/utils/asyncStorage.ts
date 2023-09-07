import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async (token: string) => {
    try {
      await AsyncStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };

export const saveTokenRf = async (token: string) => {
    try {
      await AsyncStorage.setItem('refeshToken', token);
    } catch (error) {
      console.error('Error saving token:', error);
    }
  };


export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (token !== null) {
      return token;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const getTokenRf = async () => {
    try {
      const token = await AsyncStorage.getItem('refeshToken');
      if (token !== null) {
        return token;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  };

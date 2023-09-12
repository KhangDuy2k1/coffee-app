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

  export const saveIdUser = async (id: string) => {
    try {
      await AsyncStorage.setItem('id', id);
    } catch (error) {
      console.error('Error saving id:', error);
    }
  };

  export const getId = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      if (id !== null) {
        return id;
      } else {
        return "";
      }
    } catch (error) {
      console.error('Error retrieving id:', error);
      return "";
    }
  };

  export const saveListLike = async (ids: any) => {
    try {
      const idlist = JSON.stringify(ids)
      await AsyncStorage.setItem('idsLike', idlist);
    } catch (error) {
      console.error('Error saving idsLike:', error);
    }
  };

  export const deleteListLike = async () => {
      await AsyncStorage.removeItem('idsLike');
  
  };
  export const getListLike = async () => {
    try {
      const ids = await AsyncStorage.getItem('idsLike');
      if (ids !== null) {
        return ids;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error retrieving id:', error);
      return null;
    }
  };
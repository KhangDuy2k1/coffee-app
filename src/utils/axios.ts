import Axios, { AxiosError, AxiosResponse } from 'axios';
import { getToken, getTokenRf, saveToken ,saveTokenRf } from './asyncStorage';
import { refeshToken } from '../api/refeshToken';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: "http://192.168.31.11:3000/api/",
});

axiosInstance.interceptors.request.use(
   async (config) => {
    const token = await getToken();
    if (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      };
    }
    return config;
  },
  //(error) => Promise.reject(console.log(error))
);

let id: NodeJS.Timeout;

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const data: any = error.response?.data;
    const rfToken = await getTokenRf();
    alert(data?.mes)
    if (data?.success === false && data?.error === "jwt expired") {
      try{
        const res = await refeshToken(rfToken);
        await saveToken(res.accessToken);
        DevSettings.reload();
      } catch(error: any){
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('refeshToken');
        DevSettings.reload();
        alert(data.mes);
      }
      
  }
}
);


export const sendGet = (url: string, params?: object) => axiosInstance.get(url, { params }).then((res) => res.data);
export const sendGetById = (url: string, params?: object) => axiosInstance.get(url, { params }).then((res) => res);
export const sendPost = (url: string, params?: object, queryParams?: object) => axiosInstance.post(url, params, { params: queryParams }).then((res) => res.data);
export const sendPut = (url: string, params?: object) => axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: object) => axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: object) => axiosInstance.delete(url, { data: params } ).then((res) => res.data);

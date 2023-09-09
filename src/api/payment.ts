import {sendGet, sendPost } from '../utils/axios';


export const paymentApi = (params:any) => sendPost('/order/order', params);
export const getPayment = (params:any) => sendGet('/order/order', params);
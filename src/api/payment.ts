import {sendGet, sendGetpayment, sendPost } from '../utils/axios';


export const paymentApi = (params:any) => sendPost('/order/order', params);
export const getPayment = () => sendGet('order/orders');
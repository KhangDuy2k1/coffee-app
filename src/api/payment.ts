import {sendGet, sendPut, sendPost } from '../utils/axios';


export const PaymentOff = (params:any) => sendPost('/order/order', params);
export const PaymentOn = (params:any) => sendPost('/order/pay', params);
export const PaymentCancel = (id: string) => sendPut(`/order/cancle/${id}`);
export const PaymentRecv = (id: string) => sendPut(`order/received/${id}`);
export const getPayment = () => sendGet(`order/orders`);
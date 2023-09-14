import {sendGet, sendPost, sendPut } from '../utils/axios';


export const createWallet = () => sendPost(`wallet/createwl`);
export const recharge = (params: any) => sendPut(`wallet/loadedmoney`, params);
export const getWallet = () => sendGet(`wallet/wallet`);
export const refund = (id: string) => sendPut(`wallet/cancle/${id}`);
export const pay = (id: string, params:any) => sendPost(`wallet/pay/${id}`, params);
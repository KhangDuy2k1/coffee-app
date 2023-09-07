import {sendPost } from '../utils/axios';


export const refeshToken = (params:any) => sendPost('/user/refesh', params);
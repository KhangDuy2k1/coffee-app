import {sendPost } from '../utils/axios';


export const register = (params:any) => sendPost('user/register', params);
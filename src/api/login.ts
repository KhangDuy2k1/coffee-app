import {sendPost } from '../utils/axios';


export const login = (params:any) => sendPost('/user/login', params);
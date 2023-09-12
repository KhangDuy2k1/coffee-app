import {sendGet, sendPost } from '../utils/axios';


export const getStars = (id: string) => sendGet(`reviews/starmedium/${id}`);
export const review = (id: string, params: any) => sendPost(`reviews/reviews/${id}`, params);
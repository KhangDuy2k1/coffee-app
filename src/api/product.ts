import { sendGet } from "../utils/axios";

export const getProduct= () => sendGet('coffee/getallcoffee')
export const getProductLike= () => sendGet('coffee/getcoffeeliked')
export const getProductDiscount= () => sendGet('discount/discount')
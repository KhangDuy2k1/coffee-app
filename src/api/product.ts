import { sendGet, sendGetById, sendPut } from "../utils/axios";

export const getProduct= () => sendGet('coffee/getallcoffee')
export const getProductLike= () => sendGet('coffee/getcoffeeliked')
export const getProductDiscount= () => sendGet('discount/discount')
export const getProductById= (id: string) => sendGetById(`coffee/getcoffeebyid/${id}`)
export const likeById= (id: string) => sendPut(`coffee/likecoffee/${id}`)
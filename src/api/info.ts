import { sendGet } from "../utils/axios";
export const getUser = () => sendGet(`/user/userlogin`);
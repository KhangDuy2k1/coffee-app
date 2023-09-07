
import { sendGet } from "../utils/axios";

export const getCategory = () => sendGet('category/getallcategory');

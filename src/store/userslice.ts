
import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: any = { 
  username: '',
  category: '',
  search: '',
  click: false
};


export const userSlice = createSlice({
  name: "user",  
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    updateClick: (state, action) => {
      if(state.click === false) {
        state.click = true;
      }else{
        state.click = false;
      }
    },
  }
},);



export const { updateUsername } = userSlice.actions;
export const { updateClick } = userSlice.actions;
export const { updateCategory } = userSlice.actions;
export const { updateSearch } = userSlice.actions;
export const selectUsername = (state: any) => state.user.username;
export const selectCategory = (state: any) => state.user.category;
export const selectClick = (state: any) => state.user.click;
export const selectSearch = (state: any) => state.user.search;
export default userSlice.reducer;
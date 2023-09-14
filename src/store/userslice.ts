
import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: any = { 
  username: '',
  isModalVisible: false,
  isModalOut: false,
  info: {},
  category: '',
  search: '',
  click: false,
  messages: []
};


export const userSlice = createSlice({
  name: "user",  
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateInfo: (state, action) => {
      state.info= action.payload;
    },
    updateisModalVisible: (state, action) => {
      state.isModalVisible= action.payload;
    },
    updateisModalVisibleOut: (state, action) => {
      state.isModalVisibleOut= action.payload;
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
    updateMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  }
},);



export const { updateUsername } = userSlice.actions;
export const { updateInfo } = userSlice.actions;
export const { updateisModalVisible } = userSlice.actions;
export const { updateisModalVisibleOut } = userSlice.actions;
export const { updateClick } = userSlice.actions;
export const { updateCategory } = userSlice.actions;
export const { updateSearch } = userSlice.actions;
export const { updateMessage } = userSlice.actions;
export const selectUsername = (state: any) => state.user.username;
export const selectIsModalVisible = (state: any) => state.user.isModalVisible;
export const selectIsModalVisibleOut = (state: any) => state.user.isModalVisibleOut;
export const selectCategory = (state: any) => state.user.category;
export const selectClick = (state: any) => state.user.click;
export const selectSearch = (state: any) => state.user.search;
export const selectInfo = (state: any) => state.user.info;
export const selectMessage = (state: any) => state.user.messages;
export default userSlice.reducer;
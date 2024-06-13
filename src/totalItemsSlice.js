// src/totalItemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const totalItemsSlice = createSlice({
  name: 'totalItems',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log('add items:', state, action)
      state.push(action.payload);
    },
    fetchItemsSuccess: (state, action) => {
      console.log('fetchItemsSuccess BEFORE LOAD',action.payload )
      return action.payload;
      console.log('fetchItemsSuccess STATE',state )
    },
  },
});

export const { addItem,fetchItemsSuccess } = totalItemsSlice.actions;

export default totalItemsSlice.reducer;

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
      state.items = action.payload;
    },
  },
});

export const { addItem,fetchItemsSuccess } = totalItemsSlice.actions;

export default totalItemsSlice.reducer;

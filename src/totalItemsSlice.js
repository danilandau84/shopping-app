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
  },
});

export const { addItem } = totalItemsSlice.actions;

export default totalItemsSlice.reducer;

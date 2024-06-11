// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import totalItemsReducer from './totalItemsSlice';

export const store = configureStore({
  reducer: {
    totalItems: totalItemsReducer,
  },
});

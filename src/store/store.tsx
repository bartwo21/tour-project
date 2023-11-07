import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './features/search/searchSlice';
import userReducer from './features/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    data: searchSlice,
    user: userReducer,
  },
});

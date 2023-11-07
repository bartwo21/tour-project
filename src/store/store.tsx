import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './features/search/searchSlice';
import notificationReducer from './features/notification/notificationSlice';
import userReducer from './features/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    data: searchSlice,
    notification: notificationReducer,
    user: userReducer,
  },
});

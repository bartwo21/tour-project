import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/search/searchSlice";
import userReducer from "./features/authSlice/authSlice";
import { apiSlice } from "./features/apiSlice/apiSlice";

export const store = configureStore({
  reducer: {
    data: searchSlice,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

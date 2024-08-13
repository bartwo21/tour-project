import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./features/search/searchSlice";
import userReducer from "./features/authSlice/authSlice";
import { apiSlice } from "./features/apiSlice/apiSlice";
import { tourApiSlice } from "./features/tourApiSlice/tourApiSlice";
import { paymentApiSlice } from "./features/paymentApiSlice/paymentApiSlice";

export const store = configureStore({
  reducer: {
    data: searchSlice,
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    tourApi: tourApiSlice.reducer,
    paymentApi: paymentApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      tourApiSlice.middleware,
      paymentApiSlice.middleware
    ),
  devTools: true,
});

import { configureStore } from "@reduxjs/toolkit";
import  searchSlide  from "./features/search/searchSlice";



export const store = configureStore({
    reducer: {
        data: searchSlide
    }
})
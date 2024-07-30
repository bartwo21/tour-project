import { createSlice } from "@reduxjs/toolkit";

type SearchState = {
    data: string;
}
const initialState: SearchState = {
    data: "",
};

export const searchSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        createDataFunc: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { createDataFunc } = searchSlice.actions;

export default searchSlice.reducer;
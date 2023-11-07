import { createSlice } from "@reduxjs/toolkit";

const getUser = localStorage.getItem("user");

export const authSlice = createSlice({
    name: "user",
    initialState: {
        user: getUser,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

export const { login, logout } = authSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default authSlice.reducer;
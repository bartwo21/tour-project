import { createSlice } from "@reduxjs/toolkit";

const getUser = localStorage.getItem("user");
const getFavoriteCards = JSON.parse(localStorage.getItem("favoriteCards") || "[]");

type AuthState = {
    user: any;
    favoriteCards: string[];
}

export const authSlice = createSlice({
    name: "user",
    initialState: {
        user: getUser,
        favoriteCards: getFavoriteCards,
      } as AuthState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
        toggleFavoriteCard: (state, action) => {
            const cardId = action.payload;
            const index = state.favoriteCards.indexOf(cardId);
            if (index !== -1) {
                state.favoriteCards.splice(index, 1);
            } else {
                state.favoriteCards.push(cardId);
            }
            localStorage.setItem("favoriteCards", JSON.stringify(state.favoriteCards));
        },
    },
});

export const { login, logout, toggleFavoriteCard } = authSlice.actions;

export const selectUser = (state: any) => state.user.user;

export const selectFavoriteCards = (state: any) => state.user.favoriteCards;

export default authSlice.reducer;
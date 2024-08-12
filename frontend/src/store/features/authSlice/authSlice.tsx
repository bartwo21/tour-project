import { createSlice } from "@reduxjs/toolkit";

const getUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") || "{}")
  : null;
const getFavoriteCards: string[] = JSON.parse(
  localStorage.getItem("user") || "[]"
).favoriteCards;
type AuthState = {
  user: any;
  favoriteCards: string[];
};
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUser,
    favoriteCards: Array.isArray(getFavoriteCards) ? getFavoriteCards : [],
  } as AuthState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      state.favoriteCards = [];
    },
    toggleFavoriteCard: (state, action) => {
      const cardId = action.payload;
      const index = state.favoriteCards?.indexOf(cardId);
      if (index !== -1) {
        state.favoriteCards?.splice(index, 1);
      } else {
        state.favoriteCards?.push(cardId);
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state.user, favoriteCards: state.favoriteCards })
      );
    },
  },
});

export const { login, logout, toggleFavoriteCard } = authSlice.actions;

export const selectUser = (state: any) => state.user.user;

export const selectFavoriteCards = (state: any) => state.user?.favoriteCards;

export default authSlice.reducer;

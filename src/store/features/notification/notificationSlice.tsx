import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showNotification: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state) {
      state.showNotification = true;
    },
    hideNotification(state) {
      state.showNotification = false;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export const selectNotification = (state: any) => state.notification.showNotification;
export default notificationSlice.reducer;
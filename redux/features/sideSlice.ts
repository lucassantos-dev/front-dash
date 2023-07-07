import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { isOpen: false },
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;

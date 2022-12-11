import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;

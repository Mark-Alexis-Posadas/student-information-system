import { createSlice } from "@reduxjs/toolkit";
import { InitialStateTypes } from "../types/InitialState";
const initialState: InitialStateTypes = {
  isToggleSidebar: false,
  isToggleTheme: false,
};
export const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState,
  reducers: {
    setIsToggleSidebar: (state) => {
      state.isToggleSidebar = !state.isToggleSidebar;
    },
    setIsToggleTheme: (state) => {
      state.isToggleTheme = !state.isToggleTheme;
    },
  },
});

export const { setIsToggleSidebar, setIsToggleTheme } = toggleSlice.actions;

export default toggleSlice.reducer;

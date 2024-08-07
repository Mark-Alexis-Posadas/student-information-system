import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../reducers/toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer, // The key here should be something meaningful, like "toggle"
  },
});

export default store;

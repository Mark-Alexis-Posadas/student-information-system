import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../reducers/toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer, // The key here should be something meaningful, like "toggle"
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

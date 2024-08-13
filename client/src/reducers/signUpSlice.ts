import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  HandleFieldsPayload,
  SignUpState,
} from "../types/authentication/sign-up";

const initialState: SignUpState = {
  formFields: {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    gender: "",
    password: "",
    confirmPassword: "",
  },
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    handleFields: (state, action: PayloadAction<HandleFieldsPayload>) => {
      const { fieldName, value } = action.payload;
      state.formFields[fieldName] = value;
    },
  },
});

export const { handleFields } = signUpSlice.actions;
export default signUpSlice.reducer;

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
  submittedValues: [],
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    handleFields: (state, action: PayloadAction<HandleFieldsPayload>) => {
      const { fieldName, value } = action.payload;
      state.formFields[fieldName] = value;
    },

    handleSubmit: (state) => {
      state.submittedValues.push(state.formFields);
      state.formFields = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        gender: "",
        password: "",
        confirmPassword: "",
      };
    },
  },
});

export const { handleFields, handleSubmit } = signUpSlice.actions;
export default signUpSlice.reducer;

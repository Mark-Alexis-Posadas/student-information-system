import { v4 as uuidv4 } from "uuid";
import { SignUpTypes } from "../types/authentication/sign-up";

export const signUpData: SignUpTypes[] = [
  {
    id: uuidv4(),
    text: "first name",
  },
  {
    id: uuidv4(),
    text: "middle name",
  },
  {
    id: uuidv4(),
    text: "last name",
  },
  {
    id: uuidv4(),
    text: "email",
  },

  {
    id: uuidv4(),
    text: "gender",
  },

  {
    id: uuidv4(),
    text: "password",
  },
  {
    id: uuidv4(),
    text: "confirm password",
  },
];

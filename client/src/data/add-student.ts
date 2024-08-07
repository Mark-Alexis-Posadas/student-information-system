import { v4 as uuidv4 } from "uuid";
import { AddStudentDataTypes } from "../types/forms/Input";

export const addStudentFormFieldsData: AddStudentDataTypes[] = [
  {
    id: uuidv4(),
    text: "student roll",
    name: "studentRoll",
    type: "text",
  },
  {
    id: uuidv4(),
    text: "first name",
    name: "firsName",
    type: "text",
  },
  {
    id: uuidv4(),
    text: "middle name",
    name: "middleName",
    type: "text",
  },
  {
    id: uuidv4(),
    text: "last name",
    name: "lastName",
    type: "text",
  },
  {
    id: uuidv4(),
    text: "gender",
    name: "gender",
  },
  {
    id: uuidv4(),
    text: "date of birth",
    name: "dateOfBirth",
    type: "date",
  },
  {
    id: uuidv4(),
    text: "contact",
    name: "contact",
    type: "tel",
  },
  {
    id: uuidv4(),
    text: "present address",
    name: "presentAddres",
  },
  {
    id: uuidv4(),
    text: "permanent address",
    name: "permanentAddress",
  },
];

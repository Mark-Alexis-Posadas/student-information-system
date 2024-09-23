import { StudentListTypes } from "../pages/student-list";
export interface SignUpTypes extends StudentListTypes {}

export interface SignUpFieldsTypes {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
}

export interface SignUpState {
  formFields: SignUpFieldsTypes;
  submittedValues: SignUpFieldsTypes[];
}

export interface HandleFieldsPayload {
  fieldName: keyof SignUpFieldsTypes;
  value: string;
}

export interface FormFieldsTypes {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpState {
  formFields: FormFieldsTypes;
}

export interface HandleFieldsPayload {
  fieldName: keyof FormFieldsTypes;
  value: string;
}

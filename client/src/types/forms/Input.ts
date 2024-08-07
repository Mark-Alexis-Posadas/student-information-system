export interface InputTypes {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

export interface AddStudentDataTypes {
  id: string;
  text: string;
  name: InputTypes["name"];
  type?: InputTypes["type"];
}

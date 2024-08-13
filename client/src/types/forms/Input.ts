export interface InputTypes {
  value: any;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  customClass?: string;
  handleChange: () => void;
}

export interface AddStudentDataTypes {
  id: string;
  text: string;
  name: InputTypes["name"];
  type?: InputTypes["type"];
}

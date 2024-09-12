export interface InputTypes {
  value: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  customClass?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AddStudentDataTypes {
  id: string;
  text: string;
  name: InputTypes["name"];
  type?: InputTypes["type"];
}

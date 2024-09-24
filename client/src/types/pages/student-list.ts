export interface StudentListType {
  id: string;
  text: string;
}

export interface Student {
  _id: string;
  studentRoll: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  contact: string;
  presentAddress: string;
  permanentAddress: string;
  email: string;
}

export interface StudentItemTypes {
  students: Student[];
}

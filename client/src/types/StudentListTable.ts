import { StudentListType } from "./pages/student-list";
import { Student } from "./pages/student-list";

export interface StudentListTypes {
  tableHeadingData: StudentListType[];
  students: Student[];
  currentItems: Student[];
  loading: boolean;
  setIsToggleView: (open: boolean) => void;
  handleViewStudent: (id: string) => void;
  handleToggleDelete: (id: string) => void;
}

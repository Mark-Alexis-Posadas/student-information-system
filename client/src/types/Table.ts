import { StudentListTypes } from "./pages/student-list";
import { Student } from "./pages/student-list";
export interface TableListProps {
  tableHeadingData: StudentListTypes[];
  students: Student[];
}

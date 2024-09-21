import { StudentListTypes } from "./pages/student-list";
import { Student } from "./pages/student-list";
import { ChangeEvent, SelectEvent, FormEvent } from "./Events";
export interface TableListProps {
  tableHeadingData: StudentListTypes[];
  students: Student[];
  loading: boolean;
  student: string;
  gender: string;
  handleStudentChange: (e: ChangeEvent) => void;
  handleGenderChange: (e: SelectEvent) => void;
  handleSearchSubmit: (e: FormEvent) => void;
  handleToggleDelete: (id: string) => void;
  setIsToggleDelete: (close: boolean) => void;
  isToggleDelete: boolean;
}

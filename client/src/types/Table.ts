import { StudentListTypes } from "./pages/student-list";
import { Student } from "./pages/student-list";

export interface TableListProps {
  tableHeadingData: StudentListTypes[];
  students: Student[];
  loading: boolean;
  setIsToggleView: (open: boolean) => void;
  handleViewStudent: (id: string) => void;
  handleToggleDelete: (id: string) => void;
  // student: string;
  // gender: string;
  // deleteId: string | null;
  // handleStudentChange: (e: ChangeEvent) => void;
  // handleGenderChange: (e: SelectEvent) => void;
  // handleSearchSubmit: (e: FormEvent) => void;

  // handleCancelDelete: () => void;
  // handleProceedDelete: () => void;
  // setIsToggleDelete: (close: boolean) => void;
  // isToggleDelete: boolean;
}

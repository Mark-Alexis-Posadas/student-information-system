import { v4 as uuidv4 } from "uuid";
import { StudentListTypes } from "../types/pages/student-list";

export const studentListsData: StudentListTypes[] = [
  {
    id: uuidv4(),
    text: "#",
  },
  {
    id: uuidv4(),
    text: "date created",
  },
  {
    id: uuidv4(),
    text: "roll",
  },
  {
    id: uuidv4(),
    text: "name",
  },
  {
    id: uuidv4(),
    text: "status",
  },
  {
    id: uuidv4(),
    text: "action",
  },
];

import { v4 as uuidv4 } from "uuid";
import { DepartmentListTypes } from "../types/pages/department-list";

export const departmentListsData: DepartmentListTypes[] = [
  {
    id: uuidv4(),
    text: "date created",
  },
  {
    id: uuidv4(),
    text: "name",
  },
  {
    id: uuidv4(),
    text: "description",
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

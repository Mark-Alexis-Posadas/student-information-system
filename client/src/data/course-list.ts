import { v4 as uuidv4 } from "uuid";
import { CourseListTypes } from "../types/pages/course-list";

export const courseListsData: CourseListTypes[] = [
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
    text: "department",
  },
  {
    id: uuidv4(),
    text: "course",
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

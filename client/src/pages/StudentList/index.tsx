import React from "react";
import { TableList } from "../../components/TableList";
import { studentListsData } from "../../data/student-list";
export const StudentList: React.FC = () => {
  return (
    <div>
      <TableList tableHeadingData={studentListsData} />
    </div>
  );
};

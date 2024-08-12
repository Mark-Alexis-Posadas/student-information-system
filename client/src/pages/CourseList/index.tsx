import React from "react";
import { TableList } from "../../components/TableList";
import { courseListsData } from "../../data/course-list";
export const CourseList: React.FC = () => {
  return (
    <div>
      <TableList tableHeadingData={courseListsData} />
    </div>
  );
};

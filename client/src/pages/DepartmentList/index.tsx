import React from "react";
import { TableList } from "../../components/TableList";
import { departmentListsData } from "../../data/department-list";

export const DepartmentList: React.FC = () => {
  return (
    <div>
      <TableList tableHeadingData={departmentListsData} />
    </div>
  );
};

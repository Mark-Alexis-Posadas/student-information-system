import React from "react";
import { Student } from "../../types/pages/student-list";

export const TableRow: React.FC<Student> = ({ students }) => {
  return (
    <>
      {students.map((item, index) => (
        <tr
          className="odd:bg-white even:bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
          key={item._id}
        >
          <td className="border p-2">{item.studentRoll}</td>
          <td className="border p-2">{item.firstName}</td>
          <td className="border p-2">{item.middleName}</td>
          <td className="border p-2">{item.lastName}</td>
          <td className="border p-2">{item.gender}</td>
          <td className="border p-2">{item.dateOfBirth}</td>
          <td className="border p-2">{item.contact}</td>
          <td className="border p-2">{item.presentAddress}</td>
          <td className="border p-2">{item.permanentAddress}</td>
          <td className="border p-2">{item.email}</td>
        </tr>
      ))}
    </>
  );
};

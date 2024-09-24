import { Link } from "react-router-dom";
import { Button } from "../Buttons";

import { StudentListTypes } from "../../types/StudentListTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

export const StudentListTable: React.FC<StudentListTypes> = ({
  loading,
  students,
  handleViewStudent,
  handleToggleDelete,
}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">Student Roll</th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">First Name</th>
          <th className="px-6 py-3">Middle Name</th>
          <th className="px-6 py-3">Last Name</th>
          <th className="px-6 py-3">Gender</th>
          <th className="px-6 py-3">Date of Birth</th>
          <th className="px-6 py-3">Contact</th>
          <th className="px-6 py-3">Present Address</th>
          <th className="px-6 py-3">Permanent Address</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td className="p-10">Loading...</td>
          </tr>
        ) : students.length === 0 ? (
          <tr>
            <td className="p-10">No result found</td>
          </tr>
        ) : (
          students.map((item) => (
            <tr
              className="odd:bg-white even:bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
              key={item._id}
            >
              <td className="border dark:border-gray-700 p-2">
                {item.studentRoll}
              </td>
              <td className="border dark:border-gray-700 p-2">{item.email}</td>
              <td className="border dark:border-gray-700 p-2">
                {item.firstName}
              </td>
              <td className="border dark:border-gray-700 p-2">
                {item.middleName}
              </td>
              <td className="border dark:border-gray-700 p-2">
                {item.lastName}
              </td>
              <td className="border dark:border-gray-700 p-2">{item.gender}</td>
              <td className="border dark:border-gray-700 p-2">
                {item.dateOfBirth}
              </td>
              <td className="border dark:border-gray-700 p-2">
                {item.contact}
              </td>
              <td className="border dark:border-gray-700 p-2">
                {item.presentAddress}
              </td>
              <td className="border dark:border-gray-700 p-2">
                {item.permanentAddress}
              </td>
              <td className="border dark:border-gray-700 p-2">
                <div className="flex items-center gap-3">
                  <Link to="/add-student">
                    <Button
                      classNames="flex items-center gap-2 text-white p-2 rounded bg-blue-600"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                      Edit
                    </Button>
                  </Link>

                  <Button
                    classNames="flex items-center gap-2 text-white p-2 rounded bg-gray-500"
                    type="button"
                    handleButtonClick={() => handleViewStudent(item._id)}
                  >
                    <FontAwesomeIcon icon={faEye} />
                    View
                  </Button>

                  <Button
                    classNames="flex items-center gap-2 text-white p-2 rounded bg-red-600"
                    type="button"
                    handleButtonClick={() => handleToggleDelete(item._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

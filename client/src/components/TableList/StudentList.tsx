import { Button } from "../Buttons";

import { StudentListTypes } from "../../types/StudentListTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

export const StudentListTable: React.FC<StudentListTypes> = ({
  loading,
  setIsEditing,
  students,
  currentItems,
  handleViewStudent,
  handleToggleDelete,
  setStudentDetailsModal,
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
            <td className="p-10">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </td>
          </tr>
        ) : students.length === 0 ? (
          <tr>
            <td className="p-10">No result found</td>
          </tr>
        ) : (
          currentItems.map((item) => (
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
                  <Button
                    classNames="flex items-center gap-2 text-white p-2 rounded bg-blue-600"
                    type="button"
                    handleButtonClick={() => {
                      setStudentDetailsModal(true), setIsEditing(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                    Edit
                  </Button>

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

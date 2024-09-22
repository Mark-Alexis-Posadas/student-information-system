import { Link } from "react-router-dom";
import { Button } from "../Buttons";

import { TableListProps } from "../../types/Table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faPlus,
  faSearch,
  faTrash,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ViewModal } from "../Modal/ViewModal";
import { useState } from "react";
import { ConfirmationDelete } from "../Modal/ConfirmationDelete";
import { Student } from "../../types/pages/student-list";

export const TableList: React.FC<TableListProps> = ({
  loading,
  students,
  student,
  gender,
  handleStudentChange,
  handleGenderChange,
  handleSearchSubmit,
  handleToggleDelete,
  handleCancelDelete,
  handleProceedDelete,
  isToggleDelete,
  deleteId,
}) => {
  const [view, setView] = useState<Student | null>(null);

  const [isToggleView, setIsToggleView] = useState(false);

  const handleViewStudent = async (id: string) => {
    setIsToggleView(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/students/get-single-student/${id}`
      );
      setView(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
      <div className="flex items-center justify-between border-b border-slate-300 dark:border-gray-700 p-5">
        <h1 className="font-bold">List of students</h1>
        <Link to="/add-student">
          <Button
            type="button"
            classNames="flex items-center gap-2 text-white bg-blue-600 p-2 rounded"
          >
            <FontAwesomeIcon icon={faPlus} />
            Add new student
          </Button>
        </Link>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-center lg:justify-start 3xl:justify-center w-full mb-5">
          <form
            className="flex flex-col md:flex-row justify-between gap-3 items-center my-3 bg-slate-50  dark:bg-gray-700 rounded shadow-md p-3 w-[900px]"
            onSubmit={handleSearchSubmit}
          >
            <div className="flex items-center gap-3 w-full">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                value={student}
                onChange={handleStudentChange}
                id="show_entries"
                placeholder="search by student"
                name="showEntries"
                className="w-full bg-transparent p-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <FontAwesomeIcon icon={faVenus} />
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                className="w-full bg-transparent p-2 outline-none"
              >
                <option
                  className="dark:bg-gray-700 dark:text-white text-black"
                  value="Female"
                >
                  Fe male
                </option>
                <option
                  className="dark:bg-gray-700 dark:text-white text-black"
                  value="Male"
                >
                  Male
                </option>
              </select>
            </div>
            <Button
              classNames="flex items-center gap-2 text-white bg-blue-600 p-2 rounded w-[100px]"
              type="submit"
              handleButtonClick={handleSearchSubmit}
            >
              <FontAwesomeIcon icon={faSearch} />
              Search
            </Button>
          </form>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                    <td className="border dark:border-gray-700 p-2">
                      {item.email}
                    </td>
                    <td className="border dark:border-gray-700 p-2">
                      {item.firstName}
                    </td>
                    <td className="border dark:border-gray-700 p-2">
                      {item.middleName}
                    </td>
                    <td className="border dark:border-gray-700 p-2">
                      {item.lastName}
                    </td>
                    <td className="border dark:border-gray-700 p-2">
                      {item.gender}
                    </td>
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
        </div>
        <div className="mt-10 flex items-center justify-between">
          <span>Show </span>
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-base h-10">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isToggleView && (
        <ViewModal view={view} setIsToggleView={setIsToggleView} />
      )}
      {isToggleDelete && (
        <ConfirmationDelete
          handleProceedDelete={handleProceedDelete}
          handleCancelDelete={handleCancelDelete}
          deleteId={deleteId}
        />
      )}
    </div>
  );
};

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

export const TableList: React.FC<TableListProps> = ({
  loading,
  students,
  student,
  gender,
  handleStudentChange,
  handleGenderChange,
  handleSearchSubmit,
}) => {
  const handleEdit = async (id: string) => {
    const response = await axios.get(
      `http://localhost:4000/api/students/get-single-student/${id}`
    );
    console.log(response.data);
  };
  return (
    <div className="rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
      <div className="flex items-center justify-between border-b border-slate-300 p-5">
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
                className="w-full bg-transparent p-2"
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <FontAwesomeIcon icon={faVenus} />
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                className="w-full bg-transparent p-2"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
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
                    <td className="border p-2">{item.studentRoll}</td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2">{item.firstName}</td>
                    <td className="border p-2">{item.middleName}</td>
                    <td className="border p-2">{item.lastName}</td>
                    <td className="border p-2">{item.gender}</td>
                    <td className="border p-2">{item.dateOfBirth}</td>
                    <td className="border p-2">{item.contact}</td>
                    <td className="border p-2">{item.presentAddress}</td>
                    <td className="border p-2">{item.permanentAddress}</td>
                    <td className="border p-2">
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
                        >
                          <FontAwesomeIcon icon={faEye} />
                          View
                        </Button>

                        <Button
                          classNames="flex items-center gap-2 text-white p-2 rounded bg-red-600"
                          type="button"
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
      </div>
      <div className="flex items-center justify-betwee">
        <span>Show </span>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Button } from "../Buttons";

import { TableRow } from "../Table/TableRow";
import { TableListProps } from "../../types/Table";
import { Link } from "react-router-dom";
import { ChangeEvent } from "../../types/Events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faVenus } from "@fortawesome/free-solid-svg-icons";

export const TableList: React.FC<TableListProps> = ({ students }) => {
  const [student, setStudent] = useState("");
  const [gender, setGender] = useState("");

  const handleStudentChange = (e: ChangeEvent) => {
    setStudent(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  return (
    <div className="rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
      <div className="flex items-center justify-between border-b border-slate-300 p-5">
        <h1 className="font-bold">List of students</h1>
        <Link to="/add-student">
          <Button
            type="button"
            text="Add new student"
            classNames="text-white bg-blue-600 p-2 rounded"
          />
        </Link>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-center lg:justify-start w-full mb-5">
          <div className="flex flex-col md:flex-row justify-between gap-3 items-center my-3 bg-slate-50  dark:bg-gray-700 rounded shadow-md p-3 w-[900px]">
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
              classNames="text-white bg-blue-600 p-2 rounded w-[100px]"
              type="button"
              text="Search"
            />
          </div>
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
              <TableRow students={students} />
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

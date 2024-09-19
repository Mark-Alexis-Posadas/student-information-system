import React, { useState } from "react";
import { Button } from "../Buttons";
import { TableHead } from "../Table/TableHead";
import { TableRow } from "../Table/TableRow";
import { TableListProps } from "../../types/Table";
import { Link } from "react-router-dom";
import { ChangeEvent } from "../../types/Events";

export const TableList: React.FC<TableListProps> = ({
  tableHeadingData,
  students,
}) => {
  const [student, setStudent] = useState("");
  const [gender, setGender] = useState("");

  const handleStudentChange = (e: ChangeEvent) => {
    setStudent(e.target.value);
  };

  const handleGenderChange = (e: ChangeEvent) => {
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
            classNames="text-white bg-blue-500 p-2 rounded"
          />
        </Link>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 items-center my-3">
          <div>
            <input
              type="text"
              value={student}
              onChange={handleStudentChange}
              id="show_entries"
              placeholder="search by student"
              name="showEntries"
            />
          </div>
          <div>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <Button
            classNames="text-white bg-blue-500 p-2 rounded"
            type="button"
            text="Search"
          />
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {tableHeadingData.map((item) => (
                  <TableHead item={item} key={item.id} />
                ))}
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

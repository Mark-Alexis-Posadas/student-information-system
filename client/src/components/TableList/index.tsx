import React from "react";
import { Button } from "../Buttons";
import { Input } from "../Forms/Inputs";
import { TableHead } from "../Table/TableHead";
import { TableRow } from "../Table/TableRow";
import { TableListProps } from "../../types/Table";
import { Link } from "react-router-dom";

export const TableList: React.FC<TableListProps> = ({
  tableHeadingData,
  students,
}) => {
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
        <div className="flex items-center justify-between my-3">
          <div>
            <label className="text-sm mx-3" htmlFor="">
              Show
            </label>
            <Input
              id="show_entries"
              placeholder="1"
              type="number"
              name="showEntries"
              customClass="w-[50px]"
            />
            <label className="text-sm mx-3" htmlFor="">
              Entries
            </label>
          </div>
          <div>
            <label className="text-sm mx-3" htmlFor="">
              Search
            </label>
            <Input
              id="search"
              placeholder="Search.."
              type="text"
              name="search"
            />
          </div>
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

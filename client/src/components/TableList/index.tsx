import React from "react";
import { Button } from "../Buttons";
import { Input } from "../Forms/Inputs";
import { TableHead } from "../Table/TableHead";
import { TableRow } from "../Table/TableRow";
import { TableListProps } from "../../types/pages/student-list";
export const TableList: React.FC<TableListProps> = ({ tableHeadingData }) => {
  return (
    <div className="rounded shadow-custom-shadow">
      <div className="flex items-center justify-between border-b border-slate-300 p-5">
        <h1 className="font-bold">List of students</h1>
        <Button
          text="Add new student"
          classNames="text-white bg-blue-500 p-2 rounded"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between my-3">
          <div>
            <label htmlFor="">Show</label>
            <Input
              id="show_entries"
              placeholder="1"
              type="number"
              name="showEntries"
            />
            <label htmlFor="">Entries</label>
          </div>
          <div>
            <label htmlFor="">Search</label>
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
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {tableHeadingData.map((item) => (
                  <TableHead item={item} key={item.id} />
                ))}
              </tr>
            </thead>
            <tbody>
              <TableRow />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

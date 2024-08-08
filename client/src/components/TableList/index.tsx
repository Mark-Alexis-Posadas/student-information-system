import React from "react";
import { Button } from "../Buttons";
import { Input } from "../Forms/Inputs";

export const TableList: React.FC = () => {
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
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Product name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">Silver</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

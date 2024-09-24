import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Buttons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

export const DepartmentListTable: FC = ({}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Date Created</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Description</th>
          <th className="px-6 py-3">Status</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="odd:bg-white even:bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="border dark:border-gray-700 p-2"></td>
          <td className="border dark:border-gray-700 p-2"></td>
          <td className="border dark:border-gray-700 p-2"></td>
          <td className="border dark:border-gray-700 p-2"></td>
          <td className="border dark:border-gray-700 p-2"></td>

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
      </tbody>
    </table>
  );
};

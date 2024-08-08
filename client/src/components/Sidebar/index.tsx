import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faPlus,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarTypes } from "../../types/Sidebar";

const Sidebar: React.FC<SidebarTypes> = ({ isToggle }) => {
  return (
    <>
      {!isToggle && (
        <aside className="border-r-2 border-slate-200 fixed p-3 px-4 h-full w-[250px]">
          <h1 className="font-bold">logo</h1>
          <ul className="my-3">
            <li className="my-2 text-sm text-gray-500">
              <Link to="/">Dashboard</Link>
            </li>
            <h3 className="font-bold my-3">Students</h3>
            <li className="my-2 text-sm text-gray-500">
              <Link className="flex items-center gap-2" to="/add-student">
                <FontAwesomeIcon icon={faPlus} />
                New Student
              </Link>
            </li>
            <li className="my-2 text-sm text-gray-500">
              <Link className="flex items-center gap-2" to="/student-list">
                <FontAwesomeIcon icon={faUserGroup} />
                Student List
              </Link>
            </li>
            <h3 className="font-bold my-3">Maintenance</h3>
            <li className="my-2 text-sm text-gray-500">
              <Link className="flex items-center gap-2" to="department-list">
                Department List
              </Link>
            </li>
            <li className="my-2 text-sm text-gray-500">
              <Link className="flex items-center gap-2" to="course-list">
                Course List
              </Link>
            </li>
            <li className="my-2 text-sm text-gray-500">
              <Link className="flex items-center gap-2" to="user-list">
                User List
              </Link>
            </li>
            <li className="my-2 text-sm text-gray-500">
              <Link className="flex items-center gap-2" to="settings">
                <FontAwesomeIcon icon={faGears} />
                Settings
              </Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;

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
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <h3 className="font-bold">Students</h3>
            <li>
              <Link to="/add-student">
                <FontAwesomeIcon icon={faPlus} />
                New Student
              </Link>
            </li>
            <li>
              <Link to="/student-list">
                <FontAwesomeIcon icon={faUserGroup} />
                Student List
              </Link>
            </li>
            <h3 className="font-bold">Maintenance</h3>
            <li>
              <Link to="department-list">Department List</Link>
            </li>
            <li>
              <Link to="course-list">Course List</Link>
            </li>
            <li>
              <Link to="user-list">User List</Link>
            </li>
            <li>
              <Link to="settings">
                {" "}
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

import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="border-r-2 border-slate-200 fixed h-full w-[250px]">
      <ul>
        <li>
          <Link to="/"> Dashboard</Link>
        </li>
        <h3 className="font-bold">Students</h3>
        <li>
          <Link to="/add-student">New Student</Link>
        </li>
        <li>
          <Link to="/student-list">Student List</Link>
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
          <Link to="settings">Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

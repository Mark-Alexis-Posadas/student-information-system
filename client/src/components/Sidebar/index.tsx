import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="border-r-2 border-slate-200 fixed h-full w-[250px]">
      <ul>
        <li>Dashboard</li>
        <h3 className="font-bold">Students</h3>
        <li>New Student</li>
        <li>Student List</li>
        <h3 className="font-bold">Maintenance</h3>
        <li>Department List</li>
        <li>Course List</li>
        <li>User List</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { useAppSelector } from "./hooks/hooks";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

//pages
import { AddStudent } from "./pages/AddStudent";
import { StudentList } from "./pages/StudentList";
import { DepartmentList } from "./pages/DepartmentList";
import { CourseList } from "./pages/CourseList";
import { UserList } from "./pages/UserList";
import { Settings } from "./pages/Settings";
import { Dashboard } from "./pages/Dashboard";

const App: React.FC = () => {
  const isToggleSidebar = useAppSelector(
    (state) => state.toggle.isToggleSidebar
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar isToggle={isToggleSidebar} />
      <div
        className={`dark:bg-black dark:text-white  w-full ${
          !isToggleSidebar ? "ml-[250px]" : "ml-0"
        }`}
      >
        <Navbar />
        <main className="p-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="add-student" element={<AddStudent />} />
            <Route path="student-list" element={<StudentList />} />
            <Route path="department-list" element={<DepartmentList />} />
            <Route path="course-list" element={<CourseList />} />
            <Route path="user-list" element={<UserList />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;

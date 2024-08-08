import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

//reducers
import { setIsToggle } from "./reducers/toggleSlice";
//pages
import { AddStudent } from "./pages/AddStudent";
import { StudentList } from "./pages/StudentList";
import { DepartmentList } from "./pages/DepartmentList";
import { CourseList } from "./pages/CourseList";
import { UserList } from "./pages/UserList";
import { Settings } from "./pages/Settings";
import { Dashboard } from "./pages/Dashboard";

const App: React.FC = () => {
  const isToggle = useAppSelector((state) => state.toggle.isToggle);
  const dispatch = useAppDispatch();

  const handleToggleTheme = () => {
    dispatch(setIsToggle());
  };

  const handleToggleSidebar = () => {
    dispatch(setIsToggle());
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar isToggle={isToggle} />
      <div className={`w-full ${!isToggle ? "ml-[250px]" : "ml-0"}`}>
        <Navbar
          isToggle={isToggle}
          handleToggleTheme={handleToggleTheme}
          handleToggleSidebar={handleToggleSidebar}
        />
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

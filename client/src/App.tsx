import React from "react";
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
import { useDispatch, useSelector } from "react-redux";

//types
import { IsToggleType } from "./types/states/isToggle";

const App: React.FC = () => {
  const isToggle = useSelector((state: IsToggleType) => state.toggle.isToggle);
  const dispatch = useDispatch();
  return (
    <div className="flex min-h-screen">
      <Sidebar isToggle={isToggle} />
      <div className={`w-full ${!isToggle ? "ml-[250px]" : "ml-0"}`}>
        <Navbar
          isToggle={isToggle}
          dispatch={dispatch}
          setIsToggle={setIsToggle}
        />
        <main className="p-5">
          <Routes>
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

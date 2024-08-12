import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import { AddStudent } from "./pages/AddStudent";
import { StudentList } from "./pages/StudentList";
import { DepartmentList } from "./pages/DepartmentList";
import { CourseList } from "./pages/CourseList";
import { UserList } from "./pages/UserList";
import { Settings } from "./pages/Settings";
import { Dashboard } from "./pages/Dashboard";
import AuthenticationLayout from "./AuthenticationLayout";
import { SignUp } from "./authentication/SignUp";
import { Login } from "./authentication/Login";
import DashboardLayout from "./DashboardLayout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="student-list" element={<StudentList />} />
        <Route path="department-list" element={<DepartmentList />} />
        <Route path="course-list" element={<CourseList />} />
        <Route path="user-list" element={<UserList />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;

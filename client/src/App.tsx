import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//pages
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
import { Otp } from "./authentication/Otp";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem("isLoggedIn");
    return saved === "true";
  });
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp" element={<Otp />} />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Route>
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="department-list" element={<DepartmentList />} />
          <Route path="course-list" element={<CourseList />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

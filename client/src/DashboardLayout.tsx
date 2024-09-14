import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const DashboardLayout: React.FC = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState<boolean>(false);
  const [isToggleTheme, setIsToggleTheme] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setIsToggleSidebar(!isToggleSidebar);
  };

  const handleToggleTheme = () => {
    setIsToggleTheme(!isToggleTheme);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isToggle={isToggleSidebar} />
      <div
        className={`dark:bg-black dark:text-white w-full ${
          !isToggleSidebar ? "ml-[250px]" : "ml-0"
        }`}
      >
        <Navbar
          isToggle={isToggleSidebar}
          isToggleTheme={isToggleTheme}
          handleToggleSidebar={handleToggleSidebar}
          handleToggleTheme={handleToggleTheme}
        />
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

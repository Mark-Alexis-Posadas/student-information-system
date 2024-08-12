import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useAppSelector } from "./hooks/hooks";
const DashboardLayout: React.FC = () => {
  const isToggleSidebar = useAppSelector(
    (state) => state.toggle.isToggleSidebar
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar isToggle={isToggleSidebar} />
      <div
        className={`dark:bg-black dark:text-white w-full ${
          !isToggleSidebar ? "ml-[250px]" : "ml-0"
        }`}
      >
        <Navbar />
        <main className="p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

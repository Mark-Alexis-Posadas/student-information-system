import React from "react";
import { Outlet } from "react-router-dom";

const AuthenticationLayout: React.FC = () => {
  return (
    <div className="p-20">
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;

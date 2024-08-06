import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="w-full ml-[250px]">
        <Navbar />
        <main></main>
      </div>
    </div>
  );
};

export default App;

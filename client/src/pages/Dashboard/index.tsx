import { faFile, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-2 rounded shadow-custom-shadow">
          <h1 className="font-bold">Total Departments</h1>
          <span className="text-sm text-gray-400">5</span>
        </div>
        <div className="p-2 rounded shadow-custom-shadow">
          <h1 className="font-bold">Total Courses</h1>
          <span className="text-sm text-gray-400">12</span>
        </div>
        <div className="p-2 rounded shadow-custom-shadow">
          <FontAwesomeIcon className="text-2xl" icon={faUserGroup} />
          <h1 className="font-bold">Students</h1>
          <span className="text-sm text-gray-400">1</span>
        </div>
        <div className="p-2 rounded shadow-custom-shadow">
          <FontAwesomeIcon className="text-2xl" icon={faFile} />
          <h1 className="font-bold">Student Academics</h1>
          <span className="text-sm text-gray-400">6</span>
        </div>
      </div>
    </div>
  );
};

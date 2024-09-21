import { faFile, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Student } from "../../types/pages/student-list";
import axios from "axios";
import { Link } from "react-router-dom";

export const Dashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/students/get-all-student"
        );
        setStudents(response.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchStudents();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-2 rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
          <h1 className="font-bold">Total Departments</h1>
          <span className="text-sm text-gray-400">5</span>
        </div>
        <div className="p-2 rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
          <h1 className="font-bold">Total Courses</h1>
          <span className="text-sm text-gray-400">12</span>
        </div>
        <Link to="/student-list">
          <div className="p-2 rounded bg-slate-50 shadow-custom-shadow dark:bg-[#1f1f1f]">
            <FontAwesomeIcon className="text-2xl" icon={faUserGroup} />
            <h1 className="font-bold mb-3">Students</h1>
            <span className="text-sm text-gray-400">{students.length}</span>
          </div>
        </Link>
        <div className="p-2 rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
          <FontAwesomeIcon className="text-2xl" icon={faFile} />
          <h1 className="font-bold">Student Academics</h1>
          <span className="text-sm text-gray-400">6</span>
        </div>
      </div>
    </div>
  );
};

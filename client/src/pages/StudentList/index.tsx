import React, { useEffect, useState } from "react";
import { TableList } from "../../components/TableList";
import { studentListsData } from "../../data/student-list";
import { Student } from "../../types/pages/student-list";
import axios from "axios";

export const StudentList: React.FC = () => {
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
      <TableList students={students} tableHeadingData={studentListsData} />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { ChangeEvent, OnSubmitEvent, SelectEvent } from "../../types/Events";
import { TableList } from "../../components/TableList";
import { studentListsData } from "../../data/student-list";
import { Student } from "../../types/pages/student-list";
import axios from "axios";

export const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const [student, setStudent] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleStudentChange = (e: ChangeEvent) => {
    setStudent(e.target.value);
  };

  const handleGenderChange = (e: SelectEvent) => {
    setGender(e.target.value);
  };

  const handleSearchSubmit = (e: OnSubmitEvent) => {
    e.preventDefault();
  };

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
      <TableList
        students={students}
        student={student}
        gender={gender}
        tableHeadingData={studentListsData}
        handleStudentChange={handleStudentChange}
        handleGenderChange={handleGenderChange}
        handleSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { ChangeEvent, OnSubmitEvent, SelectEvent } from "../../types/Events";
import { TableList } from "../../components/TableList";
import { studentListsData } from "../../data/student-list";
import { Student } from "../../types/pages/student-list";
import axios from "axios";

export const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  const [student, setStudent] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/students/get-all-student"
        );
        setStudents(response.data);
        setFilteredStudents(response.data);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    fetchStudents();
  }, []);

  const handleStudentChange = (e: ChangeEvent) => {
    setStudent(e.target.value);
  };

  const handleGenderChange = (e: SelectEvent) => {
    setGender(e.target.value);
  };

  const handleSearchSubmit = (e: OnSubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const filtered = students.filter((item) => {
        const matchesStudent =
          item.firstName.toLowerCase().includes(student.toLowerCase()) ||
          item.lastName.toLowerCase().includes(student.toLowerCase()) ||
          item.email.toLowerCase().includes(student.toLowerCase());
        const matchesGender = gender ? item.gender === gender : true;
        return matchesStudent && matchesGender;
      });
      setFilteredStudents(filtered);
      setLoading(false);
    }, 5000);
  };

  return (
    <div>
      <TableList
        students={filteredStudents}
        loading={loading}
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

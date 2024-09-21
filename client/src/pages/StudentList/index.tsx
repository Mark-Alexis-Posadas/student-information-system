import { FC, useEffect, useState } from "react";
import { ChangeEvent, OnSubmitEvent, SelectEvent } from "../../types/Events";
import { TableList } from "../../components/TableList";
import { studentListsData } from "../../data/student-list";
import { Student } from "../../types/pages/student-list";
import axios from "axios";

export const StudentList: FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);

  const [student, setStudent] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isToggleDelete, setIsToggleDelete] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

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

  const handleToggleDelete = (id: string) => {
    setIsToggleDelete(true);
    setDeleteId(id);
  };

  const handleCancelDelete = () => {
    setIsToggleDelete(false);
    setDeleteId(null);
  };
  const handleProceedDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:4000/api/students/delete-student/${deleteId}`
      );

      setStudents((preveStudents) =>
        preveStudents.filter((student) => student._id !== deleteId)
      );
      setDeleteId(null);
      setIsToggleDelete(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearchSubmit = (e: OnSubmitEvent) => {
    e.preventDefault();
    if (!student) {
      alert("please fill out search filed");
      return;
    }
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
        handleToggleDelete={handleToggleDelete}
        handleCancelDelete={handleCancelDelete}
        handleProceedDelete={handleProceedDelete}
        isToggleDelete={isToggleDelete}
        setIsToggleDelete={setIsToggleDelete}
        deleteId={deleteId}
      />
    </div>
  );
};

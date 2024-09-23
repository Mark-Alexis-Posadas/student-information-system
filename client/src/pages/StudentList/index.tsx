import { FC, useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faVenus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Buttons";
import { TableList } from "../../components/TableList";
import { studentListsData } from "../../data/student-list";
import { Student } from "../../types/pages/student-list";
import { ChangeEvent, OnSubmitEvent, SelectEvent } from "../../types/Events";
import { ViewModal } from "../../components/Modal/ViewModal";
import { ConfirmationDelete } from "../../components/Modal/ConfirmationDelete";
import { Pagination } from "../../components/Pagination";

export const StudentList: FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [student, setStudent] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isToggleDelete, setIsToggleDelete] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [view, setView] = useState<Student | null>(null);
  //modals
  const [isToggleView, setIsToggleView] = useState<boolean>(false);

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

  const handleViewStudent = async (id: string) => {
    setIsToggleView(true);
    try {
      const response = await axios.get(
        `http://localhost:4000/api/students/get-single-student/${id}`
      );
      setView(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

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

      setFilteredStudents((prevFiltered) =>
        prevFiltered.filter((student) => student._id !== deleteId)
      );
      setDeleteId(null);
      setIsToggleDelete(false);
    } catch (error: any) {
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
      <div className="rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
        <div className="flex items-center justify-between border-b border-slate-300 dark:border-gray-700 p-5">
          <h1 className="font-bold">List of students</h1>
          <Link to="/add-student">
            <Button
              type="button"
              classNames="flex items-center gap-2 text-white bg-blue-600 p-2 rounded"
            >
              <FontAwesomeIcon icon={faPlus} />
              Add new student
            </Button>
          </Link>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-center lg:justify-start 3xl:justify-center w-full mb-5">
            <form
              className="flex flex-col md:flex-row justify-between gap-3 items-center my-3 bg-slate-50  dark:bg-gray-700 rounded shadow-md p-3 w-[900px]"
              onSubmit={handleSearchSubmit}
            >
              <div className="flex items-center gap-3 w-full">
                <FontAwesomeIcon icon={faSearch} />
                <input
                  type="text"
                  value={student}
                  onChange={handleStudentChange}
                  id="show_entries"
                  placeholder="search by student"
                  name="showEntries"
                  className="w-full bg-transparent p-2 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 w-full">
                <FontAwesomeIcon icon={faVenus} />
                <select
                  name="gender"
                  id="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  className="w-full bg-transparent p-2 outline-none"
                >
                  <option
                    className="dark:bg-gray-700 dark:text-white text-black"
                    value="Female"
                  >
                    Female
                  </option>
                  <option
                    className="dark:bg-gray-700 dark:text-white text-black"
                    value="Male"
                  >
                    Male
                  </option>
                </select>
              </div>
              <Button
                classNames="flex items-center gap-2 text-white bg-blue-600 p-2 rounded w-[100px]"
                type="submit"
                handleButtonClick={handleSearchSubmit}
              >
                <FontAwesomeIcon icon={faSearch} />
                Search
              </Button>
            </form>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <TableList
              students={filteredStudents}
              loading={loading}
              setIsToggleView={setIsToggleView}
              tableHeadingData={studentListsData}
              handleToggleDelete={handleToggleDelete}
              handleViewStudent={handleViewStudent}
            />
            <Pagination />
          </div>
        </div>

        {isToggleView && (
          <ViewModal view={view} setIsToggleView={setIsToggleView} />
        )}
        {isToggleDelete && (
          <ConfirmationDelete
            handleProceedDelete={handleProceedDelete}
            handleCancelDelete={handleCancelDelete}
            deleteId={deleteId}
          />
        )}
      </div>
    </div>
  );
};

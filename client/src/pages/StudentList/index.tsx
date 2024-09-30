import axios from "axios";
import { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faVenus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/Buttons";
import { studentListsData } from "../../data/student-list";
import { Student } from "../../types/pages/student-list";
import {
  ChangeEvent,
  FormEvent,
  OnSubmitEvent,
  SelectEvent,
} from "../../types/Events";
import { ViewModal } from "../../components/Modal/ViewModal";
import { ConfirmationDelete } from "../../components/Modal/ConfirmationDelete";
import { Pagination } from "../../components/Pagination";
import { StudentListTable } from "../../components/TableList/StudentList";
import { AddStudent } from "../../components/Modal/AddStudent";
import { Alert } from "../../components/Alert";
import { FormValues } from "../../types/pages/add-student";

const intialFormValues = {
  studentRoll: "",
  email: "",
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  contact: "",
  presentAddress: "",
  permanentAddress: "",
};

export const StudentList: FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([]);
  const [searchByStudent, setSearchByStudent] = useState<string>("");
  const [searchByGender, setSearchByGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isToggleDelete, setIsToggleDelete] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [view, setView] = useState<Student | null>(null);
  const [isItem, setIsItem] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  //modals
  const [isToggleView, setIsToggleView] = useState<boolean>(false);
  const [studentDetailsModal, setStudentDetailsModal] =
    useState<boolean>(false);

  //pagination
  const [isShowPagination, setIsShowPagination] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;
  const totalPages: number = Math.ceil(students.length / itemsPerPage);
  const indexOfLastItem: number = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  //add student
  const [formValues, setFormValues] = useState<FormValues>(intialFormValues);

  const handleInputChange = (
    e:
      | ChangeEvent
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStudentDetailsModal(false);

    try {
      const studentData = {
        studentRoll: formValues.studentRoll,
        email: formValues.email,
        firstName: formValues.firstName,
        middleName: formValues.middleName,
        lastName: formValues.lastName,
        gender: formValues.gender,
        dateOfBirth: formValues.dateOfBirth,
        contact: formValues.contact,
        presentAddress: formValues.presentAddress,
        permanentAddress: formValues.permanentAddress,
      };

      if (isEditing) {
        const response = await axios.put(
          `http://localhost:4000/api/students/update-student/${deleteId}`,
          studentData
        );

        setFilteredStudents((prevEmployees) =>
          prevEmployees.map((emp) =>
            emp._id === response.data._id ? response.data : emp
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:4000/api/students/create-student",
          studentData
        );

        // setStudents((prev) => [...prev, response.data]);
        setFilteredStudents((prev) => [...prev, response.data]);

        setFormValues(intialFormValues);
        setIsItem(true);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
    setSearchByStudent(e.target.value);
  };

  const handleGenderChange = (e: SelectEvent) => {
    setSearchByGender(e.target.value);
  };

  const handleEditStudent = async (id: string) => {
    try {
      setStudentDetailsModal(true);
      setIsEditing(true);
      setDeleteId(id);

      // Fetch employee data for editing
      const response = await axios.get(
        `http://localhost:4000/api/students/get-single-student/${id}`
      );

      // Update input values with fetched data
      setFormValues(response.data);
    } catch (error) {
      console.log((error as Error).message);
    }
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
    if (!searchByStudent) {
      alert("please fill out search filed");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      const filtered = students.filter((item) => {
        const matchesStudent =
          item.firstName
            .toLowerCase()
            .includes(searchByStudent.toLowerCase()) ||
          item.lastName.toLowerCase().includes(searchByStudent.toLowerCase()) ||
          item.email.toLowerCase().includes(searchByStudent.toLowerCase());
        const matchesGender = searchByGender
          ? item.gender === searchByGender
          : true;
        return matchesStudent && matchesGender;
      });
      setFilteredStudents(filtered);
      setLoading(false);
      setIsShowPagination(false);
    }, 5000);
  };

  return (
    <div>
      {isItem && (
        <Alert classNames="text-green-600 mb-5" text="delete this item" />
      )}

      <div className="rounded shadow-custom-shadow dark:bg-[#1f1f1f]">
        <div className="flex items-center justify-between border-b border-slate-300 dark:border-gray-700 p-5">
          <h1 className="font-bold">List of students</h1>

          <Button
            type="button"
            classNames="flex items-center gap-2 text-white bg-blue-600 p-2 rounded"
            handleButtonClick={() => setStudentDetailsModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Add new student
          </Button>
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
                  value={searchByStudent}
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
                  value={searchByGender}
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
            <StudentListTable
              setStudentDetailsModal={setStudentDetailsModal}
              students={filteredStudents}
              loading={loading}
              setIsToggleView={setIsToggleView}
              tableHeadingData={studentListsData}
              handleToggleDelete={handleToggleDelete}
              handleViewStudent={handleViewStudent}
              currentItems={currentItems}
              setIsEditing={setIsEditing}
              handleEditStudent={handleEditStudent}
            />
          </div>
          {isShowPagination && (
            <Pagination
              handleNext={handleNext}
              handlePrev={handlePrev}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
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
        {studentDetailsModal && (
          <AddStudent
            isEditing={isEditing}
            setDeleteId={setDeleteId}
            setStudentDetailsModal={setStudentDetailsModal}
            setIsEditing={setIsEditing}
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            formValues={formValues}
          />
        )}
      </div>
    </div>
  );
};

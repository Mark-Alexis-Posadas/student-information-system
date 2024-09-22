import React, { useState } from "react";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { ChangeEvent, FormEvent } from "../../types/Events";
import { FormValues } from "../../types/pages/add-student";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

export const AddStudent: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(intialFormValues);
  const navigate = useNavigate();

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
      const response = await axios.post(
        "http://localhost:4000/api/students/create-student",
        studentData
      );
      navigate("/student-list");
      console.log(response.data);
      setFormValues(intialFormValues); //clear input fields after submit
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-5 shadow-custom-shadow rounded dark:bg-[#1f1f1f]">
      <PageTitle text="Student Details" />
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Studet Roll</label>
          <input
            autoComplete="on"
            onChange={handleInputChange}
            value={formValues.studentRoll}
            type="text"
            name="studentRoll"
            id="student_roll"
            placeholder="student roll"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Email</label>
          <input
            onChange={handleInputChange}
            value={formValues.email}
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">First name</label>
          <input
            onChange={handleInputChange}
            value={formValues.firstName}
            type="text"
            name="firstName"
            id="first_name"
            placeholder="first name"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Middle name</label>
          <input
            onChange={handleInputChange}
            value={formValues.middleName}
            type="text"
            name="middleName"
            id="middle_name"
            placeholder="middle name"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Last name</label>
          <input
            onChange={handleInputChange}
            value={formValues.lastName}
            type="text"
            name="lastName"
            id="last_name"
            placeholder="last name"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Gender</label>
          <select
            value={formValues.gender}
            name="gender"
            id="gender"
            onChange={handleInputChange}
            className="border border-slate-300 p-2 rounded dark:bg-gray-700 dark:border-none"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Date of Birth</label>
          <input
            onChange={handleInputChange}
            value={formValues.dateOfBirth}
            type="date"
            name="dateOfBirth"
            id="date_of_birth"
            placeholder="date of birth"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Contact</label>
          <input
            onChange={handleInputChange}
            value={formValues.contact}
            type="tel"
            name="contact"
            id="contact"
            placeholder="contact"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Present address</label>
          <textarea
            onChange={handleInputChange}
            name="presentAddress"
            id="present_address"
            placeholder="present address"
            className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
          ></textarea>
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Permanent address</label>
          <textarea
            onChange={handleInputChange}
            name="permanentAddress"
            id="permanent_address"
            placeholder="permanent address"
            className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
          ></textarea>
        </div>
        <div className="flex items-center gap-4">
          <Button type="submit" classNames="text-white bg-blue-500 rounded p-2">
            Add Student
          </Button>
          <Button type="button" classNames="text-white bg-gray-300 rounded p-2">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

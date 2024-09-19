import React, { useState } from "react";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { ChangeEvent, FormEvent } from "../../types/Events";
import { FormValues } from "../../types/pages/add-student";
import axios from "axios";

const intialFormValues = {
  studentRoll: "",
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  contact: "",
  presentAddress: "",
  permanentAddress: "",
  email: "",
};

export const AddStudent: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(intialFormValues);
  const [students, setStudents] = useState<string[]>([]);

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
        firstName: formValues.firstName,
        middleName: formValues.middleName,
        lastName: formValues.lastName,
        gender: formValues.gender,
        dateOfBirth: formValues.dateOfBirth,
        contact: formValues.contact,
        presentAddress: formValues.presentAddress,
        permanentAddress: formValues.permanentAddress,
        email: formValues.email,
      };
      const response = await axios.post(
        "http://localhost:4000/api/students/create-student",
        studentData
      );
      setStudents((prev) => [...prev, response.data]);
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
            placeholder="student roll"
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
            placeholder="student roll"
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
            placeholder="student roll"
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
            name="studentRoll"
            id="student_roll"
            placeholder="student roll"
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
            placeholder="student roll"
            className="border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Present address</label>
          <textarea
            onChange={handleInputChange}
            name="presentAddress"
            id="present_address"
            placeholder="Present address"
            className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
          ></textarea>
        </div>
        <div className="flex flex-col mb-3">
          <label className="capitalize text-sm">Permanent address</label>
          <textarea
            onChange={handleInputChange}
            name="permanentAddress"
            id="permanent_address"
            placeholder="Permanent address"
            className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
          ></textarea>
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            text="Add Student"
            classNames="text-white bg-blue-500 rounded p-2"
          />
          <Button
            type="button"
            text="Cancel"
            classNames="text-white bg-gray-300 rounded p-2"
          />
        </div>
      </form>
    </div>
  );
};

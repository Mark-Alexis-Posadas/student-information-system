import React, { useState } from "react";
import { addStudentFormFieldsData } from "../../data/add-student";
import { Input } from "../../components/Forms/Inputs";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Forms/Select";
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

  const handleInputChange = (e: ChangeEvent) => {
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
        {addStudentFormFieldsData.map((item, index) => (
          <div key={item.id}>
            {index === 4 ? (
              <div className="flex flex-col mb-3">
                <label className="capitalize text-sm">{item.text}</label>
                <Select />
              </div>
            ) : index === 7 || index === 8 ? (
              <div className="flex flex-col mb-3">
                <label className="capitalize text-sm">{item.text}</label>
                <TextArea placeholder={item.text} />
              </div>
            ) : (
              <div className="flex flex-col mb-3">
                <label className="capitalize text-sm">{item.text}</label>
                {item.type && (
                  <Input
                    value={formValues[item.name]}
                    handleChange={handleInputChange}
                    id={item.id}
                    name={item.name}
                    placeholder={item.text}
                    type={item.type}
                  />
                )}
              </div>
            )}
          </div>
        ))}
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

import React, { useState } from "react";
import { addStudentFormFieldsData } from "../../data/add-student";
import { Input } from "../../components/Forms/Inputs";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Forms/Select";
import { Button } from "../../components/Buttons";
import { PageTitle } from "../../components/PageTitle";
import { ChangeEvent } from "../../types/Events";

export const AddStudent: React.FC = () => {
  return (
    <div className="p-5 shadow-custom-shadow rounded dark:bg-[#1f1f1f]">
      <PageTitle text="Student Details" />
      <form>
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
                    value={values[item.name]}
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
            text="Add Student"
            classNames="text-white bg-blue-500 rounded p-2"
          />
          <Button
            text="Cancel"
            classNames="text-white bg-gray-300 rounded p-2"
          />
        </div>
      </form>
    </div>
  );
};

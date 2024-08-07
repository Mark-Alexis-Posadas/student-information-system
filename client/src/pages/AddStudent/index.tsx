import React from "react";
import { addStudentFormFieldsData } from "../../data/add-student";
import { Input } from "../../components/Forms/Inputs";
import { TextArea } from "../../components/TextArea";
import { Select } from "../../components/Forms/Select";

export const AddStudent: React.FC = () => {
  return (
    <div>
      <h1>Student Details</h1>
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
      </form>
    </div>
  );
};

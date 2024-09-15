import React from "react";
import { TextAreaTypes } from "../../types/forms/TextArea";

export const TextArea: React.FC<TextAreaTypes> = ({
  placeholder,
  name,
  id,
  handleChange,
}) => {
  return (
    <textarea
      onChange={handleChange}
      name={name}
      id={id}
      placeholder={placeholder}
      className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
    ></textarea>
  );
};

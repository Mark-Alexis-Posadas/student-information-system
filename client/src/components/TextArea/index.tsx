import React from "react";
import { TextAreaTypes } from "../../types/forms/TextArea";

export const TextArea: React.FC<TextAreaTypes> = ({ placeholder }) => {
  return (
    <textarea
      name=""
      id=""
      placeholder={placeholder}
      className="border border-slate-300 rounded p-2 dark:bg-gray-700 dark:border-none"
    ></textarea>
  );
};

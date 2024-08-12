import React from "react";
import { InputTypes } from "../../../types/forms/Input";
export const Input: React.FC<InputTypes> = ({
  type,
  name,
  id,
  placeholder,
  customClass,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${customClass} border border-slate-300 p-2 rounded text-gray-500 dark:bg-gray-700 dark:border-none`}
    />
  );
};

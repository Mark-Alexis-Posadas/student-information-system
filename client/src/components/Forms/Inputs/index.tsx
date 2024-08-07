import React from "react";
import { InputTypes } from "../../../types/forms/Input";
export const Input: React.FC<InputTypes> = ({
  type,
  name,
  id,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="border border-slate-300 p-2 rounded text-gray-500"
    />
  );
};

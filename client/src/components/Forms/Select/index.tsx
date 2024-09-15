import React from "react";
import { SelectTypes } from "../../../types/forms/Select";
export const Select: React.FC<SelectTypes> = ({
  value,
  name,
  id,
  handleChange,
}) => {
  return (
    <select
      value={value}
      name={name}
      id={id}
      onChange={handleChange}
      className="border border-slate-300 p-2 rounded dark:bg-gray-700 dark:border-none"
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  );
};

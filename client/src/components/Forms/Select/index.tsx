import React from "react";

export const Select: React.FC = ({ value }) => {
  return (
    <select
      value={value}
      name=""
      id=""
      className="border border-slate-300 p-2 rounded dark:bg-gray-700 dark:border-none"
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  );
};

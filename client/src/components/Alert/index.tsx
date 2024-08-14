import React from "react";
import { AlertTypes } from "../../types/Alert";

export const Alert: React.FC<AlertTypes> = ({ text, classNames }) => {
  return (
    <div
      className={`${classNames} p-4 mb-4 text-sm rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400`}
      role="alert"
    >
      <span className="font-medium">{text}</span>
    </div>
  );
};

import React from "react";
import { ButtonTypes } from "../../types/Button";

export const Button: React.FC<ButtonTypes> = ({
  classNames,
  text,
  children,
  type,
}) => {
  return (
    <button type={type} className={classNames}>
      {text || children}
    </button>
  );
};

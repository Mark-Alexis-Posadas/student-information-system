import React from "react";
import { ButtonTypes } from "../../types/Button";

export const Button: React.FC<ButtonTypes> = ({
  classNames,
  children,
  type,
  handleButtonClick,
}) => {
  return (
    <button type={type} className={classNames} onClick={handleButtonClick}>
      {children}
    </button>
  );
};

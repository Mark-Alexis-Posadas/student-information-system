import React from "react";
import { ButtonTypes } from "../../types/Button";

export const Button: React.FC<ButtonTypes> = ({
  classNames,
  text,
  children,
  type,
  handleButtonClick,
}) => {
  return (
    <button type={type} className={classNames} onClick={handleButtonClick}>
      {text || children}
    </button>
  );
};

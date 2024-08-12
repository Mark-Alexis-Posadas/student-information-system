import React from "react";
import { ButtonTypes } from "../../types/Button";

export const Button: React.FC<ButtonTypes> = ({
  classNames,
  text,
  children,
}) => {
  return <button className={classNames}>{text || children}</button>;
};

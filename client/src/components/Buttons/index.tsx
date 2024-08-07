import React from "react";
import { ButtonTypes } from "../../types/Button";

export const Button: React.FC<ButtonTypes> = ({ classNames, text }) => {
  return <button className={classNames}>{text}</button>;
};

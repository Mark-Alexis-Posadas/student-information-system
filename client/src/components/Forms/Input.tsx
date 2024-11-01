import { FieldProps } from "formik";
import { FC } from "react";

interface InputProps extends FieldProps {
  label: string;
}
export const Input: FC<InputProps> = ({ field, form, label, ...props }) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="block text-gray-700" htmlFor="firstName">
        {label}
      </label>
      <input {...field} {...props} />
    </div>
  );
};

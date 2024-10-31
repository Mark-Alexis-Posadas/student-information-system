import { FieldProps, getIn } from "formik";
import { FC } from "react";

interface InputProps extends FieldProps {
  label: string;
}
export const Input: FC<InputProps> = ({ field, form, label, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <div className="flex flex-col mb-3">
      <label className="block text-gray-700" htmlFor="firstName">
        {label}
      </label>
      <input {...field} {...props} />;
    </div>
  );
};

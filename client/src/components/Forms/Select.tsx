import { FieldProps } from "formik";
import { FC } from "react";

interface Option {
  value: string; // Assuming value is a string, adjust if necessary
  label: string;
}

interface SelectProps extends FieldProps {
  label: string;
  options: Option[];
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  field,
  ...props
}) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="block text-gray-700" htmlFor={field.name}>
        {label}
      </label>
      <select {...field} {...props}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

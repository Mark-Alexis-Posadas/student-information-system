export const Select = ({ options, field, form, label, options, ...props }) => {
  return (
    <select {...field} {...props}>
      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

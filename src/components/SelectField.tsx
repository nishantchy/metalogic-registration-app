import { UseFormRegister, FieldError } from "react-hook-form";

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  register: UseFormRegister<any>;
  error?: string;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="block mb-2 text-inputs font-medium text-gray-700"
      >
        {label}
      </label>
      <select
        id={name}
        {...register(name)}
        className="w-[255px] h-[47px] p-[10px] rounded-lg border-[1px] border-border focus:outline-none focus:ring-2 focus:ring-button text-start text-placeholder text-placeInput"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-placeholder"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default SelectField;

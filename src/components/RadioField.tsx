import React from "react";
import { UseFormRegister } from "react-hook-form";

interface RadioFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  register: UseFormRegister<any>;
  error?: string;
  className?: string;
}

const RadioField: React.FC<RadioFieldProps> = ({
  label,
  name,
  options,
  register,
  error,
}) => {
  return (
    <div className="">
      <p className="block mb-2 text-inputs font-medium text-gray-700">
        {label}
      </p>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center text-inputs">
            <input
              type="radio"
              value={option.value}
              {...register(name)}
              className="mr-2 focus:ring-2 focus:ring-button"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default RadioField;

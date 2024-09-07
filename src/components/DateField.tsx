import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface DateFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  className?: string;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  name,
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
      <input
        type="date"
        id={name}
        {...register(name)}
        className="w-[255px] ml-1 h-[47px] p-[10px] rounded-lg border-[1px] border-border focus:outline-none focus:ring-2 focus:ring-button text-start text-placeholder text-placeInput"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default DateField;

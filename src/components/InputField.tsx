import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
}) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="block mb-2 font-medium text-gray-700 text-inputs"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={`Enter your ` + label}
        {...register(name)}
        className="w-[255px] h-[47px] p-[10px] rounded-lg border-[1px]  border-border focus:outline-none focus:ring-2 focus:ring-button text-placeholder text-start"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;

import React, { FC } from "react";

interface IInput {
  type: `email` | `text` | `password` | `textarea`;
  id: string;
  required: boolean;
  label: string;
  register: any;
  formState: { errors: any; isSubmitting?: any };
  reset: any;
  setError: any;
}

const FormInput: FC<IInput> = ({
  register,
  formState: { errors },
  type,
  id,
  required,
  label,
}) => {
  return (
    <div className="size-full">
      <label
        className="block text-gray-700 text-xs font-bold mb-1"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id)}
        className={`shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent`}
        required={required}
        aria-required={required}
        aria-label={id}
      />
      {errors[id] && (
        <small className="text-red-600">{`>> ${errors[id].message}`}</small>
      )}
    </div>
  );
};

export default FormInput;

import { propertyType } from "@/types/biens";
import { HTMLInputTypeAttribute } from "react";
import { Path, UseFormRegister } from "react-hook-form";

type Props = {
  label: Path<propertyType>;
  register: UseFormRegister<propertyType>;
  required?: boolean;
  type?: HTMLInputTypeAttribute | "textarea";
};

const InputForm = ({
  label,
  register,
  required = true,
  type = "text",
}: Props) => {
  return (
    <div>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
          {label}
        </label>
        {type == "textarea" ? (
          <textarea
            {...register(label, { required })}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          ></textarea>
        ) : (
          <input
            {...register(label, { required })}
            type={type}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={label}
          />
        )}
      </div>
    </div>
  );
};

export default InputForm;

export const InputError = ({ error }: { error?: string }) => {
  return (
    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-500">
      {error}
    </p>
  );
};

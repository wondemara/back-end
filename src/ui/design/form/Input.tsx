import React from "react";

type Props = {
  label: string;
  type?: string;
  name: string;
  value?: string;
};

const InputForm = ({ label, type = "text", name, value }: Props) => {
  return (
    <div>
      <div className="w-full">
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          {label}
        </label>
        {type == "textarea" ? (
          <textarea
            title={label}
            id="{{ $name }}"
            name="{{ $name }}"
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          >
            {value}
          </textarea>
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={label}
            defaultValue={value}
          />
        )}

        {/* @error($name)
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {{ $message }}
        </p>
        @enderror */}
      </div>
    </div>
  );
};

export default InputForm;

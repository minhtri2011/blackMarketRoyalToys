import React from "react";

const SelectBox = ({ label, options,handleChange,...newoption }) => {
  return (
    <div>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="countries"
        onChange={e=>handleChange(e.target.value)}
        className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...newoption}
      >
        {options?.map((option, index) => {
          return <option key={index} value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectBox;

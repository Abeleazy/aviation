import React, { useState } from "react";

const ClaimDropdown = ({
  id,
  label,
  options,
  onChange,
  setIsActive,
  isActive,
}) => {
  //   const [isActive, setIsActive] = useState(false);
  console.log(options);

  const handleDropDown = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="relative">
      <button
        id={id}
        className="inline-flex h-[3rem] items-center bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800  dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        type="button"
        onClick={handleDropDown}
      >
        {label}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        className={`absolute z-10 ${
          isActive ? `` : `hidden`
        } top-[3rem] w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
          {options.map((option) => (
            <li key={option.value}>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id={`filter-radio-${option.value}`}
                  type="radio"
                  value={option.value}
                  name="filter-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => onChange(option.value)}
                />
                <label
                  htmlFor={`filter-radio-${option.value}`}
                  className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  {option.label}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClaimDropdown;

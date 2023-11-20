import React from "react";

const AddNewButon = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer w-full flex items-center justify-center gap-4 bg-indigo-900 hover:bg-indigo-800 transition-color duration-150 ease-linear text-white py-2 px-3 rounded-md "
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 3V11H3V13H11V21H13V13H21V11H13V3H11Z"
          fill="currentColor"
        />
      </svg>
      <button className="bg-transparent text-white text-sm ">New</button>
    </div>
  );
};

export default AddNewButon;

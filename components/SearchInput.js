import React from "react";

const SearchInput = ({ label, value, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={`search for ${label}`}
        className=" flex-[0.1] py-2 px-4 rounded-md w-full bg-transparent border-2 border-[#2C2D30] outline-none text-slate-300"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;

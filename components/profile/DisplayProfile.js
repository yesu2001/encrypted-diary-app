"use client";
import React, { useState } from "react";

const DisplayProfile = ({ signOut }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("name");
  const [email, setEmail] = useState("email");

  const saveProfile = () => {
    setEdit(false);
  };

  return (
    <div className="animate-in relative h-[70%] w-[50%] bg-[#27292B] rounded-md p-8">
      <div className="absolute right-4 top-4 flex gap-4 items-center">
        <button
          onClick={() => setEdit(true)}
          className="w-full bg-orange-500 text-white text-center px-2 pb-1 rounded-sm"
        >
          Edit
        </button>
        <form action={signOut}>
          <button className="w-full bg-red-600 text-white text-center px-2 pb-1 rounded-sm">
            Logout
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-4 mt-[70px]">
        <div className="flex items-center">
          <label className="w-[6rem] text-gray-300">Name</label>
          {edit ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border border-gray-500 bg-transparent rounded-md text-white px-2 py-1"
            />
          ) : (
            <p className="text-gray-100">Name</p>
          )}
        </div>
        <div className="flex items-center">
          <label className="w-[6rem] text-gray-300">Email</label>
          {edit ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border border-gray-500 bg-transparent rounded-md text-white px-2 py-1"
            />
          ) : (
            <p className="text-gray-100">Email@gmail.com</p>
          )}
        </div>
      </div>
      {edit && (
        <button
          onClick={saveProfile}
          className="absolute bottom-4 right-4 bg-green-700 text-white px-3 pb-1 rounded-md"
        >
          Update
        </button>
      )}
    </div>
  );
};

export default DisplayProfile;

"use client";
import { fetchUser, updateUser } from "@/reducer/userSlice";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DisplayProfile = ({ signOut }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.isLoading);

  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user?.name || "No name, click edit");
  const [email, setEmail] = useState(user?.user_email || "No email");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const saveProfile = () => {
    const userData = {
      name,
      user_email: email,
    };
    dispatch(updateUser({ userData, userId: user.user_id }));
    setEdit(false);
  };

  return (
    <div className="animate-in relative h-[70%] w-[50%] bg-[#27292B] rounded-md p-8">
      {loading ? (
        <p className="text-center text-gray-400 text-xl">
          Loading profile ...{" "}
        </p>
      ) : (
        <>
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
                <p
                  className={`${
                    !user?.name ? "text-slate-500 " : "text-gray-200"
                  } `}
                >
                  {name}
                </p>
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
                <p className="text-gray-100">{email}</p>
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
        </>
      )}
    </div>
  );
};

export default DisplayProfile;

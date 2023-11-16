"use client";
import { saveUser } from "@/reducer/userSlice";
import { getRandomTipAndQuote } from "@/utils/quotes";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Workspace = ({ user }) => {
  const dispatch = useDispatch();

  const [motivation, setMotivation] = useState(getRandomTipAndQuote());

  const handleShowMotivation = () => {
    setMotivation(getRandomTipAndQuote());
  };

  useEffect(() => {
    if (!user) {
      redirect("/auth");
    }
    dispatch(
      saveUser({
        user: {
          email: user?.email,
          uid: user?.id,
          name: user?.name || "",
        },
      })
    );
    handleShowMotivation();
  }, [user, dispatch]);

  console.log(user);
  return (
    <div className="h-full flex flex-col items-center justify-center gap-10">
      <p className="text-center text-[2rem] text-slate-100">
        Welcome , {user?.email}
      </p>
      {/* <div>
        <p>💡 Tip</p>
        <p></p>
      </div> */}
      <div className="flex flex-col items-center justify-center space-y-4 bg-[#28292B] rounded-md">
        <div className="max-w-md p-6 rounded-md shadow-lg">
          <h1 className="text-2xl text-slate-300 font-bold mb-4">
            💡Daily Motivation
          </h1>
          <div className="mb-6">
            <p className="text-gray-400 italic">{motivation.tip}</p>
          </div>
          <div>
            <p className="text-gray-300">{`"${motivation.quote}"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;

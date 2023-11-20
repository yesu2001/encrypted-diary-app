"use client";
import { saveUser } from "@/reducer/userSlice";
import { getRandomTipAndQuote } from "@/utils/quotes";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Workspace = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const [motivation, setMotivation] = useState(getRandomTipAndQuote());
  const handleShowMotivation = () => {
    setMotivation(getRandomTipAndQuote());
  };

  async function getUser() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      redirect("/auth");
    }
    if (data.user) {
      dispatch(
        saveUser({
          user: {
            user_email: user?.email,
            user_id: user?.id,
            name: user?.name || "",
            photo: "",
          },
        })
      );
    }
  }

  useEffect(() => {
    setLoading(true);
    getUser();
    handleShowMotivation();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-center text-[2rem] text-slate-100">loading...</p>
      ) : (
        <>
          <p className="text-center text-[2rem] text-slate-100">
            Welcome , {user?.email}
          </p>
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
        </>
      )}
    </>
  );
};

export default Workspace;

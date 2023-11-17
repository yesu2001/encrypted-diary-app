import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import DisplayProfile from "@/components/profile/DisplayProfile";

const page = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: user } = await supabase.auth.getUser();
  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (
    <div className="animate-in flex items-center justify-center p-10 h-full">
      <DisplayProfile signOut={signOut} />
    </div>
  );
};

export default page;

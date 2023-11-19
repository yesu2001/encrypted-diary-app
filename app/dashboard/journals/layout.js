import Journals from "@/components/journal/Journals";
import { getUser } from "@/utils/serverApi";
import React from "react";

export default async function layout({ children }) {
  const { userId } = await getUser();
  return (
    <div className="flex h-full">
      <Journals userId={userId} />
      {children}
    </div>
  );
}

import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({ children }) {
  return (
    <div className="flex-1 flex">
      <Sidebar />
      <div className="flex-[1]  min-h-screen bg-[#1B1D1F]">
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

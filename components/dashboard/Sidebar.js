import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#17181A] flex-[0.15] min-h-screen p-2">
      <div className="h-full rounded-md p-4 flex flex-col gap-4">
        <Link
          href="/dashboard"
          className=" text-indigo-400 tracking-widest font-bold text-xl my-4 mb-8"
        >
          SnapDiary
        </Link>
        <div className="my-4 flex flex-col gap-2 text-slate-200">
          <h3>Workspace</h3>
          <div className="ml-4 flex flex-col text-white">
            <Link href="/dashboard/journals">Journals</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-slate-200">
          <Link href="/dashboard/trash">Trash</Link>
          <Link href="/dashboard/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

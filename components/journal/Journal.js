import Link from "next/link";
import React from "react";

const Journal = ({ data }) => {
  return (
    <Link
      href={`/dashboard/journals/${data.id}`}
      className="animate-in bg-[#28292B]  py-2 px-4 rounded-md cursor-pointer"
    >
      <div>
        <h5 className="text-slate-100 font-semibold">
          {data?.title?.substring(0, 30) || "No title"}
        </h5>
      </div>
    </Link>
  );
};

export default Journal;

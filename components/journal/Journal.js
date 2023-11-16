import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const Journal = ({ data, handleJournalClick }) => {
  // const clean = DOMPurify.sanitize(data.content);
  // const content = parse(clean);
  return (
    <div
      onClick={() => handleJournalClick(data)}
      className="animate-in bg-[#28292B]  py-2 px-4 rounded-md cursor-pointer"
    >
      <div>
        <h5 className="text-slate-100 font-semibold">
          {data?.title?.substring(0, 30) || "No title"}
        </h5>
      </div>
      {/* <div>
        <p className="text-slate-600">{content}</p>
      </div> */}
    </div>
  );
};

export default Journal;

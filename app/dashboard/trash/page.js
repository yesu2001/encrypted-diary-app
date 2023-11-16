"use client";
import TrashItem from "@/components/trash/TrashItem";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Trash = () => {
  const journals = useSelector((state) => state.journals.data);
  const journalList = journals.filter(
    (journal) => journal.status === "deactive"
  );
  return (
    <div className="flex flex-col gap-5 p-5">
      <p className="text-center text-2xl text-slate-200">Trash</p>
      <div className="flex flex-col items-center justify-center my-10">
        {journalList.map((journal) => (
          <TrashItem key={journal.id} item={journal} />
        ))}
      </div>
    </div>
  );
};

export default Trash;

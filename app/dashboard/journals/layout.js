import Journals from "@/components/journal/Journals";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex h-full">
      <Journals />
      {children}
      {/* {selectedJournal ? (
        <JournalEntry
          journal={selectedJournal}
          setSelectedJournal={setSelectedJournal}
        />
      ) : (
        <p className="flex-[0.7] w-full my-auto text-center text-2xl text-gray-400">
          Select to view journals
        </p>
      )} */}
    </div>
  );
}

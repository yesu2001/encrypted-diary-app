"use client";

import JournalEntry from "@/components/journal/JournalEntry";
import Journals from "@/components/journal/Journals";
import { fetchJournals } from "@/reducer/journalSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userData);
  const journals = useSelector((state) => state.journals.data);
  const filteredJournals = journals.filter(
    (journal) => journal.status === "active"
  );
  const [selectedJournal, setSelectedJournal] = useState(null);

  useEffect(() => {
    dispatch(fetchJournals({ userId: user?.uid }));
  }, [dispatch]);

  const handleSelectJournal = (journal) => {
    setSelectedJournal(journal);
    console.log(journal.title, journal.content);
  };

  return (
    <div className="flex h-full">
      <Journals
        journals={filteredJournals}
        handleSelectJournal={handleSelectJournal}
      />
      {selectedJournal ? (
        <JournalEntry journal={selectedJournal} />
      ) : (
        <p>Select to view journals</p>
      )}
    </div>
  );
};

export default page;

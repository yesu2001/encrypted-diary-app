"use client";

import JournalEntry from "@/components/journal/JournalEntry";
import Journals from "@/components/journal/Journals";
import {
  addNewJournal,
  fetchActiveJournals,
  fetchJournals,
} from "@/reducer/journalSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  console.log(user);
  const journals = useSelector((state) => state.journals.data);
  const [selectedJournal, setSelectedJournal] = useState(null);

  const [newJournal, setNewJournal] = useState(false);
  const inputRef = useRef(null);

  const handleAddNew = () => {
    setNewJournal(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  useEffect(() => {
    dispatch(fetchActiveJournals({ userId: user?.uid }));
  }, [dispatch]);

  const handleSelectJournal = (journal) => {
    setSelectedJournal(journal);
    console.log(journal.title, journal.content);
  };

  const handleNewSubmit = (e, newTitle) => {
    e.preventDefault();
    const uid = new Date().getTime() + new Date().getFullYear();
    const newJournal = {
      id: Number(uid),
      created_at: new Date().toLocaleDateString(),
      title: newTitle,
      content: "<p>Click here to add and edit, click on the title to edit.</p>",
      user_id: user?.uid,
      status: "active",
    };

    console.log(newJournal);
    dispatch(addNewJournal({ newJournal }));
    setNewJournal(false);
  };

  return (
    <div className="flex h-full">
      <Journals
        journals={journals}
        handleSelectJournal={handleSelectJournal}
        handleAddNew={handleAddNew}
        handleNewSubmit={handleNewSubmit}
        inputRef={inputRef}
        newJournal={newJournal}
      />
      {selectedJournal ? (
        <JournalEntry
          journal={selectedJournal}
          setSelectedJournal={setSelectedJournal}
        />
      ) : (
        <p className="flex-[0.7] w-full my-auto text-center text-2xl text-gray-400">
          Select to view journals
        </p>
      )}
    </div>
  );
};

export default page;

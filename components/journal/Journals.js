"use client";

import React, { useState, useRef, useEffect } from "react";
import Journal from "./Journal";
import NewJournal from "./NewJournal";
import SearchInput from "../SearchInput";
import AddNewButon from "../AddNewButon";
import { useDispatch, useSelector } from "react-redux";
import { addNewJournal, fetchJournals } from "@/reducer/journalSlice";

const Journals = ({ journals, handleSelectJournal }) => {
  const dispatch = useDispatch();
  const [journalList, setJournalList] = useState(journals);
  const user = useSelector((state) => state.user.userData);

  // console.log(user);
  const [searchValue, setSearchValue] = useState();
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

  const handleSearchChange = () => {};

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
    <div className="animate-in pt-2 h-full flex-[0.3] bg-[#1B1E20] border-l border-r border-[#2C2D30]">
      <div className="m-2">
        <SearchInput
          label="journal"
          value={searchValue}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="flex px-4 py-2">
        <AddNewButon label="Journal" path="diary" handleClick={handleAddNew} />
      </div>
      <div className="flex flex-col gap-4 p-2 max-h-[70vh] overflow-auto scrollbar mx-1">
        {newJournal && (
          <NewJournal inputRef={inputRef} handleSubmit={handleNewSubmit} />
        )}
        {journalList?.map((journal) => (
          <Journal
            key={journal?.id}
            data={journal}
            handleJournalClick={handleSelectJournal}
          />
        ))}
      </div>
    </div>
  );
};

export default Journals;

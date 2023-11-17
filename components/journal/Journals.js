import React, { useState, useRef, useEffect } from "react";
import Journal from "./Journal";
import NewJournal from "./NewJournal";
import SearchInput from "../SearchInput";
import AddNewButon from "../AddNewButon";
import { useDispatch, useSelector } from "react-redux";
import { addNewJournal, fetchJournals } from "@/reducer/journalSlice";

const Journals = ({
  journals,
  handleSelectJournal,
  inputRef,
  handleNewSubmit,
  newJournal,
  handleAddNew,
}) => {
  console.log(journals);
  const [searchValue, setSearchValue] = useState();

  const handleSearchChange = () => {};

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
        <AddNewButon path="diary" handleClick={handleAddNew} />
      </div>
      <div className="flex flex-col gap-4 p-2 max-h-[70vh] overflow-auto scrollbar mx-1">
        {newJournal && (
          <NewJournal inputRef={inputRef} handleSubmit={handleNewSubmit} />
        )}
        {journals?.map((journal) => (
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

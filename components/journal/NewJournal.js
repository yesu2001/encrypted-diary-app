"use client";
import React, { useState } from "react";

const NewJournal = ({ handleSubmit, inputRef }) => {
  const [text, setText] = useState("");

  return (
    <div className="animate-in bg-secondary rounded-md cursor-pointer">
      <form onSubmit={(e) => handleSubmit(e, text)}>
        <div className="relative flex flex-col gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type title here..."
            className="rounded-md outline-none py-2 px-2 w-full border border-slate-200"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="submit"
            value="Add"
            className="bg-green-500 text-white px-3 py-1 cursor-pointer inline rounded-md hover:bg-green-600"
          />
        </div>
      </form>
    </div>
  );
};

export default NewJournal;

import React, { useState } from "react";
import Tiptap from "../TipTapEditor";
import parse from "html-react-parser";

const ContentComponent = ({
  isEditingContent,
  value,
  handleSaveContent,
  handleClickContent,
  editor,
  inputRef,
}) => {
  return (
    <div ref={inputRef}>
      {isEditingContent ? (
        <div>
          <Tiptap editor={editor} />
          <button
            className="absolute bottom-3 right-4 w-[100px]  rounded-sm bg-green-500 text-white py-1 px-2"
            onClick={handleSaveContent}
          >
            Save
          </button>
        </div>
      ) : (
        <p
          onClick={handleClickContent}
          className="text-gray-200 h-[85vh] overflow-auto scrollbar px-4 "
        >
          {parse(value)}
        </p>
      )}
    </div>
  );
};

export default ContentComponent;

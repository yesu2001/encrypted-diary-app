"use client";
import React, { useEffect, useRef, useState } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJournal,
  fetchSingleJournal,
  updateContent,
  updateTitle,
} from "@/reducer/journalSlice";
import TitleComponent from "./TitleComponent";
import ContentComponent from "./ContentComponent";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { decryptData, encryptData } from "@/utils/journalsApi";

const JournalEntry = ({ journal }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingContent, setIsEditingContent] = useState(false);
  const [title, setTitle] = useState(journal.title);
  const [content, setContent] = useState(journal.content);
  const user = useSelector((state) => state.user.userData);

  useEffect(() => {
    dispatch(fetchSingleJournal({ id: journal.id }));
  }, [dispatch]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (titleRef.current && !titleRef?.current?.contains(e.target)) {
        setIsEditing(false);
      }
      if (contentRef.current && !contentRef?.current?.contains(e.target)) {
        setIsEditingContent(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  const handleSave = () => {
    const html = editor.getHTML();
    dispatch(updateContent({ content: html, id: journal.id }));
    setIsEditingContent(false);
  };

  const handleSubmitTitle = (e) => {
    e.preventDefault();
    dispatch(updateTitle({ title: title, id: journal.id }));
    setIsEditing(false);
  };

  const handleDeleteJournal = () => {
    dispatch(deleteJournal({ id: journal.id }));
    setOpen(false);
    router.push("/dashboard/journals");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleDeletePopup = () => {
    setOpen(true);
  };

  return (
    <div className="animate-in flex-[0.7] p-4 bg-[#1C1E21]">
      {journal ? (
        <div className="h-[100%]">
          <TitleComponent
            title={title}
            inputRef={titleRef}
            isEditing={isEditing}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            handleEditClick={handleEditClick}
            handleDeletePopup={handleDeletePopup}
            handleSubmitTitle={handleSubmitTitle}
          />
          <ContentComponent
            isEditingContent={isEditingContent}
            value={content}
            handleClickContent={() => setIsEditingContent(true)}
            handleSaveContent={handleSave}
            editor={editor}
            inputRef={contentRef}
          />
        </div>
      ) : (
        <p className="text-center text-2xl text-gray-400">
          Select a journal to view its content.
        </p>
      )}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="text-white bg-[#17191C] p-4 rounded shadow-md">
            <p className=" text-xl font-semibold mb-4">Confirm to trash</p>
            <p>Are you sure to move this to trash?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-300 font-semibold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded"
                onClick={handleDeleteJournal}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {open && <div className="fixed inset-0 bg-black opacity-50 z-0" />}
    </div>
  );
};

export default JournalEntry;

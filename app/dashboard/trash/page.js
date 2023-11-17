"use client";
import TrashItem from "@/components/trash/TrashItem";
import { fetchJournals } from "@/reducer/journalSlice";
import {
  deletePermanent,
  fetchTrashJournals,
  restoreJournal,
} from "@/reducer/trashSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Trash = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const journals = useSelector((state) => state.trash.data);
  const journalList = journals.filter(
    (journal) => journal.status === "deactive"
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTrashJournals({ userId: user?.uid }));
  }, [dispatch]);

  const handleDelete = (id) => {
    // dispatch(delete)
    dispatch(deletePermanent(id));
    console.log("delete", id);
    setOpen(false);
  };

  const handleRestore = (id) => {
    console.log("restored", id);
    dispatch(restoreJournal(id));
  };

  return (
    <div className="flex flex-col gap-5 p-5">
      <p className="text-center text-2xl text-slate-200">Trash</p>
      <div className="flex flex-col items-center justify-center my-10">
        {journalList?.length < 1 && (
          <p className="text-gray-500 text-2xl">No Trash Items</p>
        )}
        {journalList.map((journal) => (
          <TrashItem
            key={journal.id}
            item={journal}
            onDelete={handleDelete}
            onRestore={handleRestore}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Trash;

"use client";
import TrashItem from "@/components/trash/TrashItem";
import {
  deletePermanent,
  fetchTrashJournals,
  restoreJournal,
} from "@/reducer/trashSlice";
import { getUser } from "@/utils/profileApi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Trash = () => {
  const dispatch = useDispatch();
  const journals = useSelector((state) => state.trash.data);
  const loading = useSelector((state) => state.trash.isLoading);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getUserFromClient() {
      const { userId } = await getUser();
      dispatch(fetchTrashJournals({ userId }));
    }

    getUserFromClient();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePermanent(id));
    setOpen(false);
  };

  const handleRestore = (id) => {
    dispatch(restoreJournal(id));
  };

  return (
    <div className="flex flex-col gap-5 p-5">
      <p className="text-center text-2xl text-slate-200">Trash</p>
      <div className="flex flex-col items-center justify-center my-10">
        {loading && (
          <p className="text-gray-500 text-2xl">Loading trash items</p>
        )}

        {journals?.length < 1 && !loading && (
          <p className="text-gray-500 text-2xl">No Trash Items</p>
        )}
        {journals?.map((journal) => (
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

import React, { useState } from "react";

const TrashItem = ({ item, onDelete, onRestore, open, setOpen }) => {
  return (
    <div className="w-[60%] flex items-center justify-between bg-[#27292B] px-4 py-2 rounded-sm">
      <p className="text-white">{item?.title}</p>
      <div className="flex items-center gap-3">
        <button onClick={() => onRestore(item?.id)} className="text-blue-500">
          🔃 Restore
        </button>
        <button onClick={() => setOpen(true)} className="text-red-500">
          🗑️ Delete
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="text-white bg-[#17191C] p-4 rounded shadow-md">
            <p className=" text-xl font-semibold mb-4">Comfirm Delete</p>
            <p>Do you want delete permanently?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="text-gray-300 font-semibold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded"
                onClick={() => onDelete(item?.id)}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {open && (
        <div className="fixed inset-0 bg-gray-900/[.6] opacity-50 z-0" />
      )}
    </div>
  );
};

export default TrashItem;

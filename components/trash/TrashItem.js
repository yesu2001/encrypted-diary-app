import React from "react";

const TrashItem = ({ item }) => {
  return (
    <div className="w-[60%] flex items-center justify-between bg-[#27292B] px-4 py-2 rounded-sm">
      <p className="text-white">{item.title}</p>
      <div className="flex items-center gap-3">
        <button className="text-blue-500">🔃 Restore</button>
        <button className="text-red-500">🗑️ Delete</button>
      </div>
    </div>
  );
};

export default TrashItem;

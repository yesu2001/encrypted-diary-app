import React from "react";

const TitleComponent = ({
  inputRef,
  isEditing,
  title,
  handleDeletePopup,
  handleEditClick,
  handleInputBlur,
  handleInputChange,
  handleSubmitTitle,
}) => {
  return (
    <div
      className="animate-in mb-4 flex items-center justify-between"
      ref={inputRef}
    >
      {isEditing ? (
        <form className="flex-[0.8]" onSubmit={handleSubmitTitle}>
          <input
            type="text"
            value={title}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            className="w-full text-2xl bg-transparent border-2 border-[#2C2D30] outline-none py-1 text-slate-200 font-bold px-2 rounded-md "
          />
        </form>
      ) : (
        <h2
          className="flex-1 text-slate-200 text-2xl font-bold"
          onClick={handleEditClick}
        >
          {title}
        </h2>
      )}
      <button
        className="flex-[0.1] bg-red-500 text-white rounded-md"
        onClick={handleDeletePopup}
      >
        Del
      </button>
    </div>
  );
};

export default TitleComponent;

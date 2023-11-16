"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  // Close the popup when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef?.current?.contains(e.target)) {
        setPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="w-full flex justify-center py-1 shadow-sm shadow-slate-800">
      <div
        className={`w-full max-w-4xl flex justify-between items-center py-1 px-3 text-sm`}
      >
        <Link href="/" className="text-indigo-400 text-primary text-2xl">
          SnapDiary
        </Link>
        <Link
          href="/auth"
          className="bg-primary text-slate-100 rounded-md py-1 px-2"
        >
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Header;

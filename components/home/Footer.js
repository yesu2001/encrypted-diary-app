import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-8 flex justify-center  text-center  text-slate-100 text-xs">
      <p className="text-main">
        Powered by{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>
      </p>
    </footer>
  );
};

export default Footer;

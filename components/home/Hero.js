"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Hero = () => {
  return (
    <section className=" p-8 md:p-16 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2">
        <Image
          width={400}
          height={200}
          src="/hero-image.jpg"
          alt="Web App Image"
          className="w-[90%] h-auto rounded-md shadow-sm shadow-slate-500"
        />
      </div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
        <h1 className="text-4xl text-white md:text-5xl font-semibold text-main  leading-10">
          Your Secure Journal and Notes App
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          SnapDiary is a secure and private space to write your thoughts,
          memories, and experiences. Keep your entries encrypted and safe, and
          access them from anywhere.
        </p>
        <Link href="/auth">
          <button
            className="bg-indigo-600 text-white font-medium mt-6
            px-6 py-3 rounded-full hover:bg-indigo-700 transition duration-300"
          >
            {" "}
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

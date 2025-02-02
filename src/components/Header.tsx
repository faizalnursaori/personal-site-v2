"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white lg:mx-12 my-8">
      <h1 className="text-2xl font-bold text-gray-800">faizalrn.</h1>

      <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`${
          isOpen ? "top-full opacity-100" : "-top-[400px] md:top-0 opacity-0 md:opacity-100"
        } absolute md:relative left-0 right-0 md:right-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-opacity duration-400 md:flex gap-6 z-50`}
      >
        <Link
          href={"#"}
          className="block py-2 md:py-0 md:inline text-gray-500 text-lg font-semibold hover:text-black transition"
        >
          About
        </Link>
        <Link
          href={"#"}
          className="block py-2 md:py-0 md:inline text-gray-500 text-lg font-semibold hover:text-black transition"
        >
          Project
        </Link>
        <Link
          href={"#"}
          className="block py-2 md:py-0 md:inline text-gray-500 text-lg font-semibold hover:text-black transition"
        >
          Exploration
        </Link>
        <Link
          href={"#"}
          className="block py-2 md:py-0 md:inline text-gray-500 text-lg font-semibold hover:text-black transition"
        >
          My CV
        </Link>
        <Link
          href={"#"}
          className="block py-2 md:py-0 md:hidden text-gray-500 text-lg font-semibold hover:text-black transition"
        >
          Contact Me
        </Link>
      </nav>

      <Link href={"#"} className="hidden md:block text-gray-700 text-lg font-semibold">
        Contact Me
      </Link>
    </header>
  );
};

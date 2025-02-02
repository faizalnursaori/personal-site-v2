"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Project" },
    { href: "/cv", label: "My CV" },
    { href: "/contact", label: "Contact Me", mobileOnly: true },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white lg:mx-12 my-8">
      <Link href="/">
        <h1 className="text-2xl font-bold text-gray-800">faizalrn.</h1>
      </Link>

      <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav
        className={`${
          isOpen ? "top-full opacity-100" : "-top-[400px] md:top-0 opacity-0 md:opacity-100"
        } absolute md:relative left-0 right-0 md:right-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-opacity duration-400 md:flex gap-6 z-50`}
      >
        {navLinks.map((link) =>
          !link.mobileOnly || (link.mobileOnly && screenWidth < 768) ? (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 md:py-0 md:inline text-lg transition ${
                isActive(link.href)
                  ? "text-black font-bold"
                  : "text-gray-500 font-semibold hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ) : null
        )}
      </nav>

      <Link
        href="/contact"
        className={`hidden md:block text-lg transition ${
          isActive("/contact")
            ? "text-black font-bold"
            : "text-gray-700 font-semibold hover:text-black"
        }`}
      >
        Contact Me
      </Link>
    </header>
  );
};

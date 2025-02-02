import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div>
        <footer className="flex justify-between items-center px-8 py-6 bg-white lg:mx-12 my-10 border-t-2">
          <h1 className="text-lg font-medium text-gray-800">By Faizal Nursaori - 2025</h1>

          <div className="flex flex-row gap-2 justify-center items-center">
            <Link
              href="https://www.instagram.com/faizalnursaori"
              target="_blank"
              className="block py-2 md:py-0 md:inline text-gray-500 text-lg font-semibold hover:text-black transition"
            >
              <Image
                src="/images/instagram-icon-black.svg"
                alt="Instagram Icon"
                width={28}
                height={28}
              />
            </Link>
            <Link
              href="https://github.com/faizalnursaori"
              target="_blank"
              className="block py-2 md:py-0 md:inline text-gray-500 text-lg font-semibold hover:text-black transition"
            >
              <Image src="/images/icon-github.png" alt="Github Icon" width={36} height={36} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/faizalnursaori/"
              target="_blank"
              className="block py-2 md:py-0 md:inline text-gray-500 text-lg font-semibold hover:text-black transition"
            >
              <Image src="/images/linkedin-icon.svg" alt="LinkedIn Icon" width={28} height={28} />
            </Link>
          </div>

          <p className="hidden md:block text-gray-800 text-lg font-semibold">
            Made with a keyboard and mouse.
          </p>
        </footer>
      </div>
    </>
  );
};

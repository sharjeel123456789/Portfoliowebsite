import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloudDownload } from "react-icons/io5";
'Use-client'

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 shadow-md">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/assets/projects/White Typography Initial CR Logo.png"
              alt="ms" width={80} height={80} 
            />
            <span className="ml-3 text-xl text-purple-700 font-bold">My Portfolio</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 text-gray-800 hover:text-purple-700 transition duration-300">
              Home
            </Link>
            <Link href="#about" className="mr-5 text-gray-800 hover:text-purple-700 transition duration-300">
              About Me
            </Link>
            <Link href="#skills" className="mr-5 text-gray-800 hover:text-purple-700 transition duration-300">
              Skills
            </Link>
            <Link href="#project" className="mr-5 text-gray-800 hover:text-purple-700 transition duration-300">
              Projects
            </Link>
            <Link href="#contact" className="mr-5 text-gray-800 hover:text-purple-700 transition duration-300">
              Contact
            </Link>
          </nav>
          <a href="/assets/cv/CV.pdf">
            <button className="inline-flex items-center bg-purple-700 text-white border-0 py-2 px-4 focus:outline-none hover:bg-purple-800 rounded text-base mt-4 md:mt-0 transition duration-300">
              Download CV
              <IoCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

import React from 'react'
import Image from "next/image";
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
'Use-client'
const Footer = () => {
  return (
    <div className="bg-purple-200">
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
                    src="/assets/projects/White Typography Initial CR Logo.png"
                    alt="ms"
                    width={100}
                    height={100}
                  />
      <span className="ml-3 text-xl"></span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Muhammad Sharjeel 
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
       target="blank"
      href={"https://www.linkedin.com/in/muhammad-sharjeel-939018304"} className="text-gray-500">
      <IoLogoLinkedin className="text-3xl hover:text-[#0e76a8]"/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
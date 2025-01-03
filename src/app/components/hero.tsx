'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from 'typewriter-effect';
'Use-client'

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-white">
              Hi, I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Muhammad Sharjeel'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-white text-lg">
              <b>AI-Powered Digital Marketer and Web Developer</b>
            </p>
            <div className="flex justify-center">
              <Link href={"#Contact"}>
                <button className="inline-flex text-white bg-purple-700 border-0 py-3 px-8 focus:outline-none hover:bg-purple-500 rounded-lg text-lg shadow-lg transition duration-300">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-lg shadow-lg w-full"
              width={100}
              height={80} 
              alt="hero"
              src="/assets/photos/ddddddd.jpg"
              
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

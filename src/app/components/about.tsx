import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
'Use-client'

const About = () => {
  return (
    <div id="About">
      <section className="text-gray-600 body-font bg-gray-100 py-10">
        <div className="container px-5 mx-auto flex flex-col">
          <div className="lg:w-4/5 mx-auto bg-white shadow-lg rounded-lg p-8">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 overflow-hidden">
                  <Image
                    className="object-cover object-center w-full h-full"
                    width={100}
                    height={80} 
                    alt="hero"
                    src="/assets/photos/ddddddd.jpg"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center mt-4">
                  <h2 className="font-semibold text-gray-900 text-2xl">
                    Muhammad Sharjeel
                  </h2>
                  <div className="w-16 h-1 bg-purple-700 rounded mt-2 mb-4" />
                  <p className="text-base text-gray-700">
                    AI-Powered Digital Marketer and Web Developer.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="font-bold text-4xl text-gray-900">About Me</h2>
                <p className="leading-relaxed text-lg text-gray-700 mt-4">
                  A results-driven digital marketing professional with over 2 years of experience in creating and executing innovative strategies to drive business growth. Skilled in SEO, paid advertising, social media management, content creation, and data analytics, I excel at developing targeted campaigns that enhance brand visibility and deliver measurable results.
                </p>
                <div className="flex mt-6 justify-center sm:justify-start">
                  <Link target="_blank" href="/assets/cv/CV.pdf">
                    <button className="inline-flex text-white bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded-lg text-lg shadow-md transition duration-300">
                      View CV
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

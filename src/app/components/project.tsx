import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
'Use-client'

const Project = () => {
  return (
    <div id="project" ><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Latest Project or Work
        </h1>
      </div>
      <div className="flex flex-wrap -m-8">
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              height={100} 
              width={100}
              className="absolute object-cover object-center"
              src="/assets/projects/Screenshot 2025-01-02 144646.jpg"             
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-purple-700 mb-1">
                Clothing Store
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                AZORE
              </h1>
              <p className="leading-relaxed">
                Succesfully launched and running business, selling Cloth for my client.
              </p>
              <Link href={"https://hamaravisa.com/"} target="blank" >
              <p className="leading-relaxed text-purple-700 hover:underline" >
                View..
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              height={80} 
              width={100}
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/assets/projects/Screenshot 2025-01-02 144807.jpg"
             
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-purple-700 mb-1">
                Academy of Digital Marketing Pakistan
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                ADM Pakistan
              </h1>
              <p className="leading-relaxed">
                Succesfully Teaching over 100 of students and teach digital marketing through the platform of ADM Pakistan
              </p>
              <Link href={"https://hamaravisa.com/"} target="blank" >
              <p className="leading-relaxed text-purple-700 hover:underline" >
                View..
              </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              height={100}
              width={100}
              className="absolute inset-0 w-50 h-50 object-cover object-center display-flex"
              src="/assets/projects/Red Blue Professional Minimal Brand Logo.png"
             
             
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-purple-700 mb-1">
                Visa Consultancy and Documentation Service
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                HamaraVisa.com
              </h1>
              <p className="leading-relaxed">
                Succesfully Consult over 2000 customer and help to get there Visa.
              </p>
              <Link href={"https://hamaravisa.com/"} target="blank" >
              <p className="leading-relaxed text-purple-700 hover:underline" >
                View..
              </p>
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

export default Project
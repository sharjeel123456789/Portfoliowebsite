import React from "react";
'Use-client'

function Skills() {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Skills and Services
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[3rem]">
            {[
              { name: "Digital Marketing", percentage: 100 },
              { name: "Graphic Designing", percentage: 75 },
              { name: "Web Development", percentage: 80 },
              { name: "WordPress", percentage: 90 },
              { name: "Shopify", percentage: 99 },
              { name: "Meta Ads", percentage: 100 },
              { name: "Google Ads", percentage: 95 },
              { name: "SEO", percentage: 80 },
            ].map((skill, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-700 text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      {skill.name}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                      <div
                        className="absolute bg-purple-700 h-1 rounded-xl"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <p className="font-bold text-purple-700 text-right p-1">
                      {skill.percentage}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;

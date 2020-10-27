import React from "react";
import Dots from "./Svg/Dots"
import GlobeIcon from "./Svg/GlobeIcon"

function twoByTwo() {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto py-12 px-6">
        <Dots/>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h3 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Why choose us?
            </h3>
          </div>
          <div className="mt-10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:col-span-2">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                <GlobeIcon/>
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Specialized Company
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  We are a landscaping company that specializes in residential
                  and commercial landscaping
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                {/* <!-- Heroicon name: scale --> */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Licensed & Insured
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  All our landscapers are fully licensed, bonded and insured for
                  their safety
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                {/* <!-- Heroicon name: lightning-bolt --> */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Dependable Services
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  We love to take pride in the work we do. Each project is
                  finished in time and budget
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                {/* <!-- Heroicon name: mail --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Day Scheduling
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  We schedule regular appointments to visit your property on the
                  same day and time of the week
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                {/* <!-- Heroicon name: mail --> */}
                {/* <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Free Consultations
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  We offer free consultations for our services, and will provide
                  you with an actual quote
                </p>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-400 text-white">
                {/* <!-- Heroicon name: mail --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Reputable Company
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-400">
                  Operating for more than 30 years, earning a repuation for
                  service and beautiful work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default twoByTwo;

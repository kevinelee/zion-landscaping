import React from "react";
import Form from "./form";
import {Link} from 'gatsby'

function AboutUs() {
  return (
    <div className="py-8 bg-gray-50 overflow-hidden px-4 lg:px-2">
      <div className="max-w-7xl mx-auto">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h1 className="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            About Zion Landscaping
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative mb-12 lg:mb-0">
            <div className="mb-10 prose text-gray-500 mx-auto lg:max-w-none">
              <p>
                Since 1989, Zion Landscaping Inc. has been a licensed landscape contractor that delivers effective and successful landscape design and construction. For decades, we have been serving our clients in developing long-term projects and design throughout Orange County and Los Angeles.
              </p>
              <ul>
                <li>We like gardening.</li>
                <li>We like helping.</li>
                <li>We are family.</li>
              </ul>
              <h2>We’re here to help</h2>
              <p>We want to make your dreams come true. All. Your. Dreams.</p>
            </div>
            <div className="flex text-base max-w-prose mx-auto lg:max-w-none">
              <div className="rounded-md shadow">
                <Link 
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition duration-150 ease-in-out"
                  to="/contact">
                  Contact Sales
                </Link>
              </div>
              <div className="rounded-md shadow ml-4">
                <Link 
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green transition duration-150 ease-in-out"
                  to="/about">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative text-base mx-auto w-full">
            <h3 className="text-center text-3xl mb-2 font-semibold">Request an Estimate!</h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

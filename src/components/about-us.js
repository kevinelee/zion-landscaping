import React from "react";
// import Form from "./form";
// import { Link } from "gatsby";

function AboutUs() {
  return (
    <>
      {/* <div className="py-8 bg-gray-50 overflow-hidden px-4 lg:px-2">
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
                  Since 1989, Zion Landscaping Inc. has been a licensed
                  landscape contractor that delivers effective and successful
                  landscape design and construction. For decades, we have been
                  serving our clients in developing long-term projects and
                  design throughout Orange County and Los Angeles.
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
                    to="/contact"
                  >
                    Contact Sales
                  </Link>
                </div>
                <div className="rounded-md shadow ml-4">
                  <Link
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green transition duration-150 ease-in-out"
                    to="/about"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative text-base mx-auto w-full">
              <h3 className="text-center text-3xl mb-2 font-semibold">
                Request an Estimate!
              </h3>
              <Form />
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative bg-gray-900">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=HUAB3P7Cex&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
            alt=""
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              We are Zion Landscaping
            </p>
            <p className="mt-3 text-lg text-gray-300">
              We transform any imagination into a vision through our design and
              consultation. With our expertise and expereince we will make your
              vision into an unparalled paradis. Contact us to start envisioning
              your dream home.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Visit the help center
                  {/* Heroicon name: solid/external-link */}
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

import React from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({firstLine, secondLine, children}) => {
  return (
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 inset-0 absolute flex flex-col justify-center">
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-white">
        {firstLine}
        <br />
        {secondLine}
      </h2>
      <div className="mt-8 flex justify-center">

        {children}
        {/* <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Get started
          </a>
        </div>
        <div className="rounded-md shadow ml-4">
          <a
            href="#"
            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green transition duration-150 ease-in-out "
          >
            Learn more
          </a>
        </div> */}

      </div>
    </div>
  );
}

export default Hero;

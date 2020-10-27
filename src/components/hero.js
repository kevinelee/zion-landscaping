import React from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({ firstLine, secondLine, children, color = "text-white"}) => {
  return (
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 inset-0 absolute flex flex-col justify-center">
      <h2 className={`text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 ${color}`}>
        {firstLine}
        <br />
        {secondLine}
      </h2>
      <div className="mt-8 flex justify-center">{children}</div>
    </div>
  );
};

export default Hero;

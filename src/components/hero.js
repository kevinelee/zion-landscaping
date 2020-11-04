import React from "react";

// eslint-disable-next-line react/prop-types
const Hero = ({
  firstLine,
  secondLine,
  children,
  color = "text-white",
  extraClasses,
  margin = "mt-8"
}) => {
  return (
    <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 inset-0 absolute flex flex-col justify-center">
      <h2
        className={`text-3xl font-extrabold tracking-tight leading-10 ${color} ${extraClasses}`}
      >
        {firstLine}
        <br />
        <br className="hidden md:flex" />
        {secondLine}
      </h2>
      <div className={`${margin} flex justify-center`}>{children}</div>
    </div>
  );
};

export default Hero;

/* eslint-disable react/prop-types */
import React from "react";

export default function Banner({isGreen = false, children}) {
  return (
    <section className={`flex justify-center align-center bg-gray-200 h-96 md:h-72 relative ${isGreen ? "green" : ""}`}>
      {children}

    </section>
  );
}

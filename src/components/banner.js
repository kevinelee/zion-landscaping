/* eslint-disable react/prop-types */
import React from "react";

export default function Banner({ height = "h-96", isGreen = false, children }) {
  return (
    <section
      className={`flex justify-center align-center bg-gray-200 ${height} md:h-72 relative ${
        isGreen ? "green" : ""
      }`}
    >
      {children}
    </section>
  );
}

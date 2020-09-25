/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ href = "#", text, extraClasses, onClick }) {
  return (
    <a
      onClick={() => onClick}
      href={href}
      className={`justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md focus:outline-none transition duration-150 ease-in-out ${
        extraClasses ? extraClasses : ""
      }`}
    >
      {text}
    </a>
  );
}

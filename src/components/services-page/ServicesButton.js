import React from "react";

const ServicesButton = ({ value, svc, isActive, handleSelect }) => {
  return (
    <button
      value={value}
      className={`${
        isActive ? `outline-none text-green-500 lg:border-2 border-green-500 rounded` : null
      } services-button px-3 py-1 hover:text-green-500 focus:outline-none`}
      onClick={(e) => handleSelect(e)}
      id={svc}
    >
      {svc}
    </button>
  );
};

export default ServicesButton;

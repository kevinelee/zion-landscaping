import React from "react";

const ServicesButton = ({ value, svc, isActive, handleSelect }) => {
  return (
    <button
      value={value}
      className={`${
        isActive ? `text-green-500 lg:border-2 border-green-500 rounded` : null
      } services-button lg:px-3 py-1 mx-1 hover:text-green-500`}
      onClick={(e) => handleSelect(e)}
      id={svc}
    >
      {svc}
    </button>
  );
};

export default ServicesButton;

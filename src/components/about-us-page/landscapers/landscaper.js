/* eslint react/prop-types: 0 */

import React from "react";

const Landscaper = ({ src, alt, name, bio }) => {
  return (
    <>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={src} alt={alt} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a href="#" className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {name}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">{bio}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landscaper;

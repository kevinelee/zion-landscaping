import React from "react";
import Paul from "../../../images/paul.png";
import Sam from "../../../images/sam.jpg";
import Simon from "../../../images/simon.jpg";
import Landscaper from "../landscapers/landscaper";

export default function Landscapers() {
  const landscapers = [
    {
      firstName: "Paul",
      lastName: "Yoo",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non dui dolor. Aliquam feugiat ipsum eu lorem pharetra, nec euismod odio fringilla. Vestibulum ornare efficitur.",
      image: Paul,
    },
    {
      firstName: "Samuel",
      lastName: "Yoo",
      bio:
        "Quisque nunc libero, tempus sit amet ullamcorper porttitor, malesuada eget justo. Pellentesque tincidunt quam leo, ac ultricies dolor imperdiet eu. Etiam consequat bibendum augue, vitae.",
      image: Sam,
    },
    {
      firstName: "Simon",
      lastName: "Yoo",
      bio:
        "Aenean commodo euismod tellus, id vehicula arcu vestibulum vitae. Cras tempor tortor purus, in tincidunt justo molestie sed. Phasellus vel blandit lectus. Sed quis massa.",
      image: Simon
    },
  ];

  return (
    <section>
      <div className="relative py-16 px-4 sm:px-6  lg:px-0">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            The Landscapers
          </h2>
          <div className="mt-12 grid gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">

            {landscapers.map((ls)=>{
              return (
                <Landscaper 
                  key={ls.firstName} 
                  src={ls.image} 
                  alt={ls.firstName} 
                  name={`${ls.firstName} ${ls.lastName}`} 
                  bio={ls.bio}/>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  );
}

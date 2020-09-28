import React from "react";
import Jimmy from "../../../images/jimmy butler.png";
import Devin from "../../../images/devin booker.png";
import Lebron from "../../../images/lebron james.png";
import Landscaper from "../landscapers/landscaper";

export default function Landscapers() {
  const landscapers = [
    {
      firstName: "Jimmy",
      lastName: "Butler",
      bio:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non dui dolor. Aliquam feugiat ipsum eu lorem pharetra, nec euismod odio fringilla. Vestibulum ornare efficitur.",
      image: Jimmy,
    },
    {
      firstName: "Devin",
      lastName: "Booker",
      bio:
        "Quisque nunc libero, tempus sit amet ullamcorper porttitor, malesuada eget justo. Pellentesque tincidunt quam leo, ac ultricies dolor imperdiet eu. Etiam consequat bibendum augue, vitae.",
      image: Devin,
    },
    {
      firstName: "Lebron",
      lastName: "James",
      bio:
        "Aenean commodo euismod tellus, id vehicula arcu vestibulum vitae. Cras tempor tortor purus, in tincidunt justo molestie sed. Phasellus vel blandit lectus. Sed quis massa.",
      image: Lebron,
    },
  ];

  return (
    <section>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            The Landscapers
          </h2>
          <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">

            {landscapers.map((ls)=>{
              return (
                <Landscaper key={ls.firstName} src={ls.image} alt={ls.firstName} name={`${ls.firstName} ${ls.lastName}`} bio={ls.bio}/>
              )
            })}
            {/* <Landscaper src={jimmy} name="Jimmy Butler" alt="Jimmy Butler"/> */}
            {/* <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={Jimmy} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Boost your conversion rate
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto accusantium praesentium eius, ut atque fuga
                      culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={Devin} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      How to use search engine optimization to drive sales
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Velit facilis asperiores porro quaerat doloribus, eveniet
                      dolore. Adipisci tempora aut inventore optio animi.,
                      tempore temporibus quo laudantium.
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={Lebron} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href="#" className="block">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                      Improve your customer experience
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sint harum rerum voluptatem quo recusandae magni placeat
                      saepe molestiae, sed excepturi cumque corporis perferendis
                      hic.
                    </p>
                  </a>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </section>
  );
}

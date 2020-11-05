import React, { useState } from "react";
import Jimmy from "../images/jimmy butler.png";
import Devin from "../images/devin booker.png";
import Lebron from "../images/lebron james.png";
import QuotationSVG from "./Svg/QuotationSVG";

function Testimonials() {
  const testimonials = [
    {
      name: "Jimmy Butler",
      comments:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non dui dolor. Aliquam feugiat ipsum eu lorem pharetra, nec euismod odio fringilla. Vestibulum ornare efficitur.",
      image: Jimmy,
    },
    {
      name: "Devin Booker",
      comments:
        "Quisque nunc libero, tempus sit amet ullamcorper porttitor, malesuada eget justo. Pellentesque tincidunt quam leo, ac ultricies dolor imperdiet eu. Etiam consequat bibendum augue, vitae.",
      image: Devin,
    },
    {
      name: "Lebron James",
      comments:
        "Aenean commodo euismod tellus, id vehicula arcu vestibulum vitae. Cras tempor tortor purus, in tincidunt justo molestie sed. Phasellus vel blandit lectus. Sed quis massa.",
      image: Lebron,
    },
  ];

  const [testimonial, setTestimonial] = useState(testimonials[0]);

  return (
    <section className="bg-gray-50  px-4 lg:px-2">
      <h3 className="max-w-screen-xl mx-auto text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:pb-8 ">
        Testimonials
      </h3>
      <div className="flex flex-col lg:flex-row justify-center max-w-7xl  mx-auto px-2 lg:pb-8 lg:px-0 mb-4 items-center">
        <div className="flex lg:flex-col lg:w-1/4 justify-center">
          {testimonials && testimonials.length > 0
            ? testimonials.map((testimonial) => {
                return (
                  <div
                    key={testimonial.name}
                    onClick={() => setTestimonial(testimonial)}
                    className={`${testimonial !== testimonial ? "blur" : null} h-16 flex justify-center items-center border-2 m-2 hover:border-green-500 rounded-md px-4 cursor-pointer`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 object-cover rounded-full"
                    />
                    <span className="hidden md:block">{testimonial.name}</span>
                  </div>
                );
              })
            : null}
        </div>

        {/* comment section */}
        {testimonial.comments ? (
          <div className="bg-gray-200 flex justify-center items-center rounded-md lg:w-3/4 shadow-lg flex-col py-4 px-8 lg:h-56">
            <h1 className="md:hidden text-2xl font-semibold">
              {testimonial.name}
            </h1>
            <div>
              <p className="border-t-2 border-black md:border-none font-semibold text-md lg:w-9/12 mx-auto py-4">
                <QuotationSVG />
                {testimonial.comments}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Testimonials;

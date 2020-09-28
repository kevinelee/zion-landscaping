import React, { useState } from "react";
import Jimmy from "../images/jimmy butler.png";
import Devin from "../images/devin booker.png";
import Lebron from "../images/lebron james.png";

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

  console.log(testimonials, "testimonials");
  console.log(testimonial, "testimonial");

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-center max-w-7xl h-72 lg:h-96 mx-auto px-2 lg:py-8 mb-4 items-center">
        <div className="flex lg:flex-col lg:w-1/4 justify-center">
          {testimonials && testimonials.length > 0
            ? testimonials.map((testimonial) => {
                return (
                  <div
                    key={testimonial.name}
                    onClick={() => setTestimonial(testimonial)}
                    className="h-16 flex justify-center items-center border-2 m-2 hover:border-gray-400  rounded-md px-4"
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
          <div className="md:w-4/5 lg:w-1/2 bg-gray-200 flex justify-center items-center rounded-md shadow-lg flex-col py-4 px-8 lg:h-56">
            <h1 className="md:hidden text-2xl ">{testimonial.name}</h1>
            <p className="border-t-2 border-black md:border-none">{testimonial.comments}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Testimonials;

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

  return (
    <section className="bg-gray-50">
      <h3 className="max-w-screen-xl mx-auto text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 lg:py-8 lg:px-6">
        Testimonials
      </h3>
      <div className="flex flex-col lg:flex-row justify-center max-w-7xl  mx-auto px-2 lg:py-8 mb-4 items-center">
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
          <div className="bg-gray-200 flex justify-center items-center rounded-md lg:w-3/4 shadow-lg flex-col py-4 px-8 lg:h-56">
            <h1 className="md:hidden text-2xl font-semibold">
              {testimonial.name}
            </h1>
            <div>
              <p className="border-t-2 border-black md:border-none font-semibold text-md">
                <svg
                  className="absolute z-10 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600 opacity-25 "
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
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

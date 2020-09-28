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
      image: Jimmy
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
      <div className="flex justify-center max-w-7xl h-96 mx-auto py-8">
        <div className="w-1/4 flex flex-col ">
          {testimonials && testimonials.length > 0
            ? testimonials.map((testimonial) => {
                return (
                  <div
                    key={testimonial.name}
                    onClick={() => setTestimonial(testimonial)}
                    className="h-32 flex justify-center items-center border-2 m-2 hover:border-gray-400 rounded-md"
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 object-cover rounded-full"/>
                    {testimonial.name}
                  </div>
                );
              })
            : null}
        </div>

        {/* comment section */}
        {testimonial.comments ? (
          <div className="w-1/2 bg-gray-200 flex justify-center items-center rounded-md shadow-lg">
            <p className="p-8">{testimonial.comments}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Testimonials;

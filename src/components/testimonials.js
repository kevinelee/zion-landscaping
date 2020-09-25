import React, { useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Jimothy Butler",
      comments:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non dui dolor. Aliquam feugiat ipsum eu lorem pharetra, nec euismod odio fringilla. Vestibulum ornare efficitur.",
    },
    {
      name: "Kevin Booker",
      comments:
        "Quisque nunc libero, tempus sit amet ullamcorper porttitor, malesuada eget justo. Pellentesque tincidunt quam leo, ac ultricies dolor imperdiet eu. Etiam consequat bibendum augue, vitae.",
    },
    {
      name: "Lebron Jimmy",
      comments:
        "Aenean commodo euismod tellus, id vehicula arcu vestibulum vitae. Cras tempor tortor purus, in tincidunt justo molestie sed. Phasellus vel blandit lectus. Sed quis massa.",
    },
  ];

  const [testimonial, setTestimonial] = useState(testimonials[0]);

  console.log(testimonials, "testimonials");
  console.log(testimonial, "testimonial");

  return (
    <section className="bg-gray-50">
      <div className="flex justify-center max-w-7xl h-96 mx-auto py-8">
        {/* clickable names */}
        <div className="w-1/4 flex flex-col ">
          {
            testimonials && testimonials.length > 0
              ? testimonials.map((testimonial) => {
                  return (
                    <div
                      key={testimonial.name}
                      onClick={() => setTestimonial(testimonial)}
                      className="h-32 flex justify-center items-center border-2 m-2 hover:border-black"
                    >
                      {testimonial.name}
                    </div>
                  );
               })
              : null
          }
        </div>

        {/* comment section */}
        {
          testimonial.comments
            ? (
              <div className="w-3/4 bg-green-500 flex justify-center items-center">
                <p className="p-8">{testimonial.comments}</p>
              </div>
            )
            : null
        }
      </div>
    </section>
  );
}

export default Testimonials;

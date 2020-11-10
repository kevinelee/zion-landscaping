import React, { useState } from "react";
import QuotationSVG from "./Svg/QuotationSVG";

function Testimonials() {
  const testimonials = [
    {
      name: "Rosi M. - Irvine",
      comments:
        "Paul was honest with his estimate and managed our expectations as we had never built out a backyard before",
    },
    {
      name: "Jm M. - Lake Forrest",
      comments:
        "Zion landscaping is excellent. They installed our entire yard for a new home. We are very pleased. Good attention to detail and craftsmanship. They worked steadily and answered our questions throughout. Paul is responsive and insightful.",
    },
    {
      name: "Amie L. - Mission Viejo",
      comments:
        "Zion not only provided the best price, but also were excellent to work with. We plan on having them tackle other house projects in the future and have already gotten their bid on other renovations to our home.",
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

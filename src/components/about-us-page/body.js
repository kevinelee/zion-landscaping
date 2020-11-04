/* eslint-disable react/prop-types */
import React from "react";
import Button from "../Button";

export default function Body() {
  const YearBox = ({ year, title, paragraph }) => {
    return (
      <div className="md:w-1/3 mr-4 mb-4 ">
        <h1 className="mb-2 flex">
          <div className="border-2 border-gray rounded text-green-500 font-semibold text-3xl py-1 px-3 mr-2">
            {year}
          </div>
          <div className="my-auto font-semibold">{title}</div>
        </h1>
        <p>{paragraph}</p>
      </div>
    );
  };

  return (
    <section>
      <div className="flex justify-center py-8">
        <div className="flex flex-col justify-center ">
          <h1 className="text-5xl font-semibold">We Are The Landscaper</h1>
          <br />
          <p>
            The landscaper is a full-service landscaping company with a
            straightforward and unique design/build philosophy. We believe in
            having one landscape designer handle the job from its conception on
            paper, to the realization on your property. The reason; by doing
            this you are able to communicate and work with a single individual
            where you can share your thoughts and ideas with to bring them to
            life.
          </p>

          <br />

          <p>
            the landscaper is made up of a group of highly skilled landscaping
            professionals who pays a lot of attention to small details. In the
            30+ years of experience, our staff keep your pretty looking and
            functioning beautifully.
          </p>

          <br />
          <Button
            text="Get Started"
            extraClasses="inline-flex text-white bg-green-600 hover:bg-green-500 focus:shadow-outline w-1/4"
            href="/contact"
          />
        </div>

        <img
          style={{ minWidth: "50%" }}
          className="object-contain w-1/2 ml-8 hidden lg:flex"
          src="https://www.houselogic.com/wp-content/uploads/2010/03/landscape-curb-appeal-retina_retina_f09021ca6edac80b70f3a5b5092c4059.jpg"
          alt="landscaping"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <YearBox
          year="1978"
          title="Started the Company"
          paragraph="Almost four decades ago we started as a company with two men.  Not much later, a landscape designed joined the team adn from that point, we grew quickly."
        />

        <YearBox
          year="1997"
          title="Second Location"
          paragraph="Almost four decades ago we started as a company with two men.  Not much later, a landscape designed joined the team adn from that point, we grew quickly."
        />

        <YearBox
          year="2015"
          title="Total of 12 Awards"
          paragraph="Almost four decades ago we started as a company with two men.  Not much later, a landscape designed joined the team adn from that point, we grew quickly."
        />
      </div>
    </section>
  );
}

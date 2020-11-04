import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hero from "./hero";
import Buttons from "./Button";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

import React from "react";

export default function ReactCarousel() {
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="transform 700ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div
          className="number-slide1 object-contain"
          style={{ width: "100vw", height: "70vh" }}
        >
          <Hero
            firstLine="Do you like what you see?"
            secondLine="Give us a call!"
          >
            <Buttons />
          </Hero>
          <Buttons />
        </div>
        <div
          className="number-slide2"
          style={{ width: "100vw", height: "70vh" }}
        >
          <Hero firstLine="Please." secondLine="Give us a call!">
            <Buttons />
          </Hero>
        </div>
        <div
          className="number-slide3"
          style={{ width: "100vw", height: "70vh" }}
        >
          <Hero firstLine="We're begging you!" secondLine="Give us a call!">
            <Buttons />
          </Hero>
        </div>
      </Carousel>
    </div>
  );
}

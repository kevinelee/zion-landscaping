import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
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
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div
          className="number-slide1"
          style={{ height: "300px", width: "500px" }}
        >
          Item 1
        </div>
        <div
          className="number-slide2"
          style={{ height: "300px", width: "500px" }}
        >
          Item 2
        </div>
        <div
          className="number-slide3"
          style={{ height: "300px", width: "500px" }}
        >
          Item 3
        </div>
        <div
          className="number-slide4"
          style={{ height: "300px", width: "500px" }}
        >
          Item 4
        </div>
      </Carousel>
    </div>
  );
}

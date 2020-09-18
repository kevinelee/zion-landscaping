import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../css/style.css";

function Carousel() {
  const [sliderRef] = useKeenSlider();

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">One</div>
      <div className="keen-slider__slide number-slide2">Two</div>
      <div className="keen-slider__slide number-slide3">Three</div>
      <div className="keen-slider__slide number-slide4">Four</div>
      <div className="keen-slider__slide number-slide5">Five</div>
      <div className="keen-slider__slide number-slide6">Six</div>
    </div>
  );
}

export default Carousel;

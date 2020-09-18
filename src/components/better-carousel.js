import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../css/style.css";

function Carousel() {
  const [sliderRef] = useKeenSlider();

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1"></div>
      <div className="keen-slider__slide number-slide2"></div>
      <div className="keen-slider__slide number-slide3"></div>
      <div className="keen-slider__slide number-slide4"></div>
      <div className="keen-slider__slide number-slide5"></div>
      <div className="keen-slider__slide number-slide6"></div>
    </div>
  );
}

export default Carousel;

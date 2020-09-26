/* eslint-disable react/prop-types */
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../css/style.css";
import Hero from "../components/hero";
import Button from "../components/Button";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
  });

  const Buttons = () => {
    return (
      <>
        <div className="inline-flex rounded-md shadow">
          <Button
            text="Get Started"
            extraClasses="inline-flex text-white bg-green-600 hover:bg-green-500 focus:shadow-outline"
          />
        </div>
        <div className="rounded-md shadow ml-4">
          <Button
            text="Learn More"
            extraClasses="w-full flex text-green-600 bg-white hover:text-green-500 focus:outline-none focus:border-green-300 focus:shadow-outline-green"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="navigation-wrapper ">
        <div
          ref={sliderRef}
          className="keen-slider min-w-full h-96 lg:height80vh"
        >
          <div className="keen-slider__slide number-slide1">
            <Hero
              firstLine="Do you like what you see?"
              secondLine="Give us a call!"
            >
              <Buttons />
            </Hero>
          </div>
          <div className="keen-slider__slide number-slide2">
            <Hero firstLine="Please." secondLine="Give us a call!">
              <Buttons />
            </Hero>
          </div>
          <div className="keen-slider__slide number-slide3">
            <Hero firstLine="We're begging you!" secondLine="Give us a call!">
              <Buttons />
            </Hero>
          </div>
        </div>

        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />

            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <div className="dots bg-gray-50">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

function ArrowLeft(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left" + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right" + disabled}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

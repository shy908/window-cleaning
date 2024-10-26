import React, { useState, useEffect } from "react";
import SliderContent from "./SliderContent";
import imageSlider from "./ImageSlider";
import Arrows from "./Arrows"; 
import Dots from "./Dots"; 

const len = imageSlider.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === len ? 0 : prevIndex + 1
        );
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(index) => setActiveIndex(index)}
      />
    </div>
  );
}

export default Slider;
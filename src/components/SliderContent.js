import React from "react";
import { Link } from "react-router-dom";

function SliderContent({ activeIndex, imageSlider = [] }) {
  return (
    <section>
      {imageSlider.length > 0 ? (
        imageSlider.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slide active" : "slide inactive"}
          >
            <img
              className="slide-image"
              src={slide.urls}
              alt={slide.title || "Slide image"}
            />
            <h2 className="slide-title">{slide.title}</h2>
            <Link to={slide.link} className="learn-more-button">
              Learn More
            </Link>
          </div>
        ))
      ) : (
        <p>No slides available.</p>
      )}
    </section>
  );
}

export default SliderContent;
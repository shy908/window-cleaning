import React from "react";

const Dots = ({ activeIndex, imageSlider, onClick }) => {
  return (
    <div className="dot-container">
      {imageSlider.map((_, index) => (
        <span
          key={index}
          className={`dot ${activeIndex === index ? "active-dot" : ""}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;

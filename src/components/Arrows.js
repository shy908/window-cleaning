import React from "react";

const Arrows = ({ prevSlide, nextSlide }) => {
  return (
    <div className="arrow-container">
      <button className="arrow" onClick={prevSlide}>&#10094;</button>
      <button className="arrow" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Arrows;
import React, { useState } from "react";
import "./Carousal.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img2, img3, img1];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel__button" onClick={prevSlide}>
        &lt;
      </button>
      <img
        className="carousel__image"
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
      <button className="carousel__button" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import { slides } from "../../mock/slides";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="CarouselStyle"
    >
      {slides.map(({ src, alt, title, text }, i) => (
        <Carousel.Item key={i}>
          <img src={src} alt={alt} />
          <Carousel.Caption>
            <h3>{title}</h3>
            <p>{text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;

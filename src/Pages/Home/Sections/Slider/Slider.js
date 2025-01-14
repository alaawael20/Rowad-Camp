import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../../../Images/slider1.jpg";
import slider2 from "../../../../Images/slider2.jpg";
import slider3 from "../../../../Images/slider3.jpg";
import "./Slider.css";

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
      <Carousel.Item>
        <img src={slider1} alt="First Slide" />
        <Carousel.Caption>
          <h3>التطعيم ضد شلل الأطفال</h3>
          <p>هذا التطعيم خاص للأطفال ما دون سن 10 سنوات</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider2} alt="Second Slide" />
        <Carousel.Caption>
          <h3>جمعية إنقاذ المستقبل الشبابي</h3>
          <p>
            قدمت جمعية إنقاذ المستقبل الشبابي محاضرة للنساء بعنوان "المرأة في
            المجتمع"{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={slider3} alt="Third Slide" />
        <Carousel.Caption>
          <h3>مخيم رواد</h3>
          <p>مخيم رواد يقطن فيه النازحين في مواصي خانيونس</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

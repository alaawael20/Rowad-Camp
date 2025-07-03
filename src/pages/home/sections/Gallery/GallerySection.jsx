import React, { useState } from "react";
import "./GallerySection.css";
import { images } from "../../../../mock/images";
import Title from "../../../../components/title/Title";

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openLightbox = (idx) => {
    setCurrent(idx);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const gotoPrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  const gotoNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  React.useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && isOpen && closeLightbox();
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [isOpen]);

  return (
    <section className="gallery-section" id="gallery">
      <Title title="مقتطفات المخيم" />

      <div className="gallery-grid">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="gallery-thumb"
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="close-btn"
            aria-label="إغلاق"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="nav-btn prev"
            onClick={gotoPrev}
            aria-label="السابق"
          >
            &#10095;
          </button>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="nav-btn next"
            onClick={gotoNext}
            aria-label="التالي"
          >
            &#10094;
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

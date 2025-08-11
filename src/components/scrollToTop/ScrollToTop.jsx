import { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollUp = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <button
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollUp}
      aria-label="Back To Top"
    >
      <i className="fas fa-chevron-up" />
    </button>
  );
};

export default ScrollToTop;

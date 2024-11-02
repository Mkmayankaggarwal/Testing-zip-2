import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./ScrollToTop.css"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <button className="scroll-btn" onClick={scrollToTop}>
        <FaChevronUp />
      </button>
    </div>
  );
};

export default ScrollToTop;

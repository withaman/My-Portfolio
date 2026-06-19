import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-white
        flex items-center justify-center
        shadow-lg
        hover:scale-110
        transition-all duration-300"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
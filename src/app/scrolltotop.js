"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 p-3 
        bg-gray-800 text-white rounded-full shadow-lg 
        hover:bg-gray-600 transition-opacity duration-300 
        focus:outline-none focus:ring-2 focus:ring-gray-400
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
      title="العودة لأعلى الصفحة"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;

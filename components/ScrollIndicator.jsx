"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to cv-content
      const cvContent = document.querySelector(".cv-content");
      if (cvContent) {
        const contentTop = cvContent.getBoundingClientRect().top;
        // Hide when cv-content is in viewport
        if (contentTop <= window.innerHeight) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const cvContent = document.querySelector(".cv-content");
    if (cvContent) {
      const offset = 70; // Account for mobile header
      const elementPosition = cvContent.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Hide immediately on click
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="scroll-indicator-fixed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={scrollToContent}
            className="scroll-indicator-btn"
            aria-label="Scroll to main content"
          >
            <span className="scroll-indicator-label animate-pulse">See My Work</span>
            <motion.div
              className="scroll-indicator-icon animate-pulse"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HiArrowDown />
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;

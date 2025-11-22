"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/constants";
import { fadeIn } from "@/lib/animations";

const DesktopNav = () => {
  const [activeSection, setActiveSection] = useState("summary");

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="desktop-nav"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <ul className="desktop-nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`desktop-nav-link ${
                activeSection === item.id ? "desktop-nav-link-active" : ""
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  className="desktop-nav-indicator"
                  layoutId="desktopActiveIndicator"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default DesktopNav;

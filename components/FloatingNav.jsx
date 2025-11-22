"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/lib/constants";

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("summary");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll with special handling for last section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      // Check if we're at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      // If at bottom, set Contact as active
      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      // Normal section detection
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="floating-nav-bar"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="floating-nav-content">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`floating-nav-item ${
                isActive ? "floating-nav-item-active" : ""
              }`}
              title={item.label}
            >
              {/* Label (slides in from left on hover) */}
              <motion.span
                className={`floating-nav-label ${
                  isActive ? "floating-nav-label-active" : ""
                }`}
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: isHovered ? "auto" : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {item.label}
              </motion.span>

              {/* Icon */}
              <Icon
                className={`floating-nav-icon ${
                  isActive ? "floating-nav-icon-active" : ""
                }`}
              />
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default FloatingNav;

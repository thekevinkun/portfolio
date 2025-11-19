"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

import { navItems } from "@/lib/constants";
import { mobileNavVariants } from "@/lib/animations";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("summary");

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 150;

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

  useEffect(() => {
    const scrollIndicator = document.querySelector(".scroll-indicator-fixed");

    if (scrollIndicator) {
      if (isOpen) {
        scrollIndicator.style.opacity = "0";
      } else {
        scrollIndicator.style.opacity = "1";
      }
    }
  }, [isOpen])
  

  return (
    <>
      {/* Mobile Header - Only visible on mobile/tablet */}
      <header className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-header-logo">
            <span className="logo-text">KM</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="hamburger-button"
            aria-label="Open navigation menu"
          >
            <HiMenu />
          </button>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-out Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="mobile-nav-panel"
          >
            {/* Close Button */}
            <div className="mobile-nav-header">
              <h2 className="mobile-nav-title">Navigation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="mobile-nav-close"
                aria-label="Close navigation menu"
              >
                <HiX />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`mobile-nav-link ${
                      activeSection === item.id ? "mobile-nav-link-active" : ""
                    }`}
                  >
                    <span className="mobile-nav-link-text">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.span
                        className="mobile-nav-indicator"
                        layoutId="activeIndicator"
                      />
                    )}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Footer Info */}
            <div className="mobile-nav-footer">
              <p className="mobile-nav-footer-text">Kevin Mahendra</p>
              <p className="mobile-nav-footer-subtitle">Full Stack Developer</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;

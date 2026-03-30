"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

import OptimizedImage from "@/components/OptimizedImage";
import LeftDrawer from "@/components/LeftDrawer";

import { navItems } from "@/lib/constants";
import { mobileNavVariants } from "@/lib/animations";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [showLeftDrawerHint, setShowLeftDrawerHint] = useState(false);
  const [showLeftDrawerPulse, setShowLeftDrawerPulse] = useState(false);
  const [activeSection, setActiveSection] = useState("summary");

  const leftDrawerVariants = {
    hidden: { x: "-100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
      },
    },
  };

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsLeftOpen(false);
      }
    };

    if (isOpen || isLeftOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isLeftOpen]);

  // Show the left-drawer hint after wait for 1.5 seconds on first visit (if they haven't opened it yet).
  useEffect(() => {
    const t = window.setTimeout(() => {
      setShowLeftDrawerHint(true);
      setShowLeftDrawerPulse(true);
    }, 1500);

    return () => window.clearTimeout(t);
  }, []);

  // Show the left-drawer hint on every refresh, then hide it automatically.
  useEffect(() => {
    if (showLeftDrawerHint) {
      const t = window.setTimeout(() => setShowLeftDrawerHint(false), 10000);
      return () => window.clearTimeout(t);
    }
  }, [showLeftDrawerHint]);

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

  // useEffect(() => {
  //   const scrollIndicator = document.querySelector(".scroll-indicator-fixed");

  //   if (scrollIndicator) {
  //     if (isOpen || isLeftOpen) {
  //       scrollIndicator.style.opacity = "0";
  //     } else {
  //       scrollIndicator.style.opacity = "1";
  //     }
  //   }
  // }, [isOpen, isLeftOpen]);

  return (
    <>
      {/* Mobile Header - Only visible on mobile/tablet */}
      <header className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-header-logo-area">
            <button
              type="button"
              onClick={() => {
                setIsLeftOpen(true);
                setShowLeftDrawerHint(false);
                setShowLeftDrawerPulse(false);
                setIsOpen(false);
              }}
              className={`mobile-header-logo-button${
                !isLeftOpen && !isOpen && showLeftDrawerPulse
                  ? " mobile-header-logo-button-pulse"
                  : ""
              }`}
              aria-label="Open profile details"
            >
              {showLeftDrawerPulse && !isLeftOpen && !isOpen && (
                <span
                  className="mobile-logo-pulse"
                  aria-hidden="true"
                />
              )}
              <span className="mobile-header-logo-asset">
                <OptimizedImage
                  src="/images/logos/logo-black.png"
                  alt="Kevin Mahendra Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  priority={true}
                  noWrapper={true}
                />
              </span>
            </button>

            {/* First-time hint */}
            {!isLeftOpen && !isOpen && showLeftDrawerHint && (
              <motion.div
                className="mobile-logo-tooltip"
                role="note"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                Tap logo for Skills & Contact
              </motion.div>
            )}
          </div>

          <button
            onClick={() => {
              setIsLeftOpen(false);
              setIsOpen(true);
            }}
            className="hamburger-button"
            aria-label="Open navigation menu"
          >
            <HiMenu />
          </button>
        </div>
      </header>

      {/* Backdrop + Left Slide-out Drawer */}
      <AnimatePresence>
        {isLeftOpen && (
          <>
            <motion.div
              className="left-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLeftOpen(false)}
            />
            <motion.aside
              className="left-drawer-panel"
              variants={leftDrawerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <LeftDrawer onClose={() => setIsLeftOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

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

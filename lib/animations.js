// Fade In Animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Fade In with delay
export const fadeInDelay = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

// Slide In from Bottom
export const slideInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide In from Top
export const slideInTop = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide In from Left
export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Slide In from Right
export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Scale Up (Zoom In)
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Stagger Children Animation (for lists/grids)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger Item
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Fade Out Animation
export const fadeOut = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// Slide Out to Bottom
export const slideOutBottom = {
  visible: { opacity: 1, y: 0 },
  hidden: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// Hover Animation (for cards/buttons)
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" },
};

// Tap Animation (for buttons)
export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

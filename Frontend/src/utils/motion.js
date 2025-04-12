export const sidebarVariants = {
  open: {
    scaleX: 1, // Fully expanded
    width: "50%",
    opacity: 1,
    originX: 0, // Expand from the left side
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  closed: {
    scaleX: 0, // Fully collapsed
    opacity: 0,
    originX: 0, // Collapse towards the left
    transition: { type: "spring", stiffness: 400, damping: 40 },
  },
};

export const sidebarCarts = (direction) => ({
  hidden: {
    x: direction === "left" ? -50 : direction === "right" ? 100 : 0,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
});

export const sidebarNav = (direction) => ({
  hidden: {
    x: direction === "left" ? -50 : direction === "right" ? 100 : 0,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
});


export const FadeIn = (direction) => ({
  hidden: {
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "down" ? 100 : 0,
    opacity: 0,
  },
  open: {
    y: direction === "up" ? -100 : 0,
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
});

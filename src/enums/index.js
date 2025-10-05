export const slideUp = {
  initial: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.04,
    },
  }),
  closed: {
    y: "100%",
    opacity: 0,
  },
};

export const opacity = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.5 }
  },
  closed: {
    opacity: 0
  }
};
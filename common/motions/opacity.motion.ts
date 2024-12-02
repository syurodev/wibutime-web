export const opacity = {
  initial: {
    opacity: 0,
  },
  animate: (delay: number) => ({
    opacity: 1,
    transition: { delay: delay ?? 0 },
  }),
  exit: {
    opacity: 0,
  },
};

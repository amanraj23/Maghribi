export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1 }
};

export const luxeTransition = { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const };

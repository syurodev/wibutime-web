'use client';

import React from 'react';
import { useTransitionState } from 'next-transition-router';
import { motion } from 'framer-motion';

export function PageWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { stage } = useTransitionState();

  const slide = {
    initial: {
      y: '100vh',
    },

    enter: {
      y: '100vh',
    },

    exit: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const perspective = {
    initial: {
      scale: 1,
      y: 0,
    },

    enter: {
      scale: 1,
      y: 0,
    },

    exit: {
      scale: 0.9,
      y: -150,
      opacity: 0.5,
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const opacity = {
    initial: {
      opacity: 0,
    },

    enter: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },

    exit: {
      opacity: 1,
    },
  };

  console.log(stage);

  return (
    <div className="w-full min-h-dvh bg-black">
      <motion.div
        className="h-[100dvh] w-screen fixed left-0 top-0 bg-background z-10"
        initial={slide.initial}
        animate={stage === 'leaving' ? slide.exit : slide.enter}
      />
      <motion.div
        className="page"
        initial={perspective.initial}
        animate={stage === 'leaving' ? perspective.exit : perspective.enter}
      >
        <motion.div
          className="w-full min-h-dvh bg-background"
          initial={opacity.initial}
          animate={stage === 'leaving' ? opacity.exit : opacity.enter}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

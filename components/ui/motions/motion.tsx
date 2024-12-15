'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Animation config
const slide = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideReverse = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

// Common Motion Base
type MotionProps = HTMLMotionProps<'div'> & {
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  reverse?: boolean; // Tham số reverse để chọn kiểu animation
};

const MotionBase: React.FC<MotionProps> = ({
  as: Component = 'div',
  delay = 0,
  reverse = false, // Giá trị mặc định là false
  children,
  ...props
}) => {
  const animation = reverse ? slideReverse : slide; // Chọn animation dựa trên reverse
  const MotionComponent = motion[
    Component as keyof typeof motion
  ] as React.ElementType;

  return (
    <MotionComponent
      initial={animation.initial}
      animate={{
        ...animation.animate,
        transition: { ...animation.animate.transition, delay },
      }}
      exit={animation.exit}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

// Motion Components
export const MotionDiv: React.FC<MotionProps> = (props) => (
  <MotionBase as="div" {...props} />
);
MotionDiv.displayName = 'MotionDiv';

export const MotionP: React.FC<MotionProps> = (props) => (
  <MotionBase as="p" {...props} />
);
MotionP.displayName = 'MotionP';

export const MotionSpan: React.FC<MotionProps> = (props) => (
  <MotionBase as="span" {...props} />
);
MotionSpan.displayName = 'MotionSpan';

export const MotionSection: React.FC<MotionProps> = (props) => (
  <MotionBase as="section" {...props} />
);
MotionSection.displayName = 'MotionSection';

export { MotionDiv, MotionP, MotionSpan, MotionSection };

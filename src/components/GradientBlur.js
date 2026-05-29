import React from 'react';
import { motion } from 'framer-motion';
import './GradientBlur.css';

const GradientBlur = ({ position = 'top-left', color = 'blue', intensity = 1 }) => {
  return (
    <motion.div
      className={`gradient-blur ${position}`}
      style={{
        background: color,
        opacity: 0.3 * intensity,
      }}
      animate={{
        x: [0, 50, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default GradientBlur;

import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedButton.css';

const AnimatedButton = ({ text, onClick, variant = 'primary', size = 'medium', disabled = false }) => {
  const variants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.button
      className={`animated-btn ${variant} ${size}`}
      onClick={onClick}
      disabled={disabled}
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span className="btn-text">{text}</span>
      <motion.span
        className="btn-glow"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.button>
  );
};

export default AnimatedButton;

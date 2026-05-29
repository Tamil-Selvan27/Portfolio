import React from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import AnimatedButton from '../components/AnimatedButton';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="page-container cta-page">
      <GradientBlur position="top-right" color="linear-gradient(135deg, #764ba2, #f093fb)" />
      <GradientBlur position="bottom-left" color="linear-gradient(135deg, #fa709a, #fee140)" />

      <motion.div
        className="cta-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="cta-title" variants={itemVariants}>
          Ready to Create Something Awesome?
        </motion.h1>

        <motion.p className="cta-description" variants={itemVariants}>
          Let's collaborate and bring your ideas to life. I'm available for freelance projects,
          full-time opportunities, or just a friendly coffee chat.
        </motion.p>

        <motion.div className="cta-buttons" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <AnimatedButton
              text="📧 Contact Me"
              onClick={() => navigate('/contact')}
              variant="primary"
              size="large"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <AnimatedButton
              text="� View Projects"
              onClick={() => navigate('/projects')}
              variant="secondary"
              size="large"
            />
          </motion.div>
        </motion.div>

        <motion.div className="floating-elements" variants={containerVariants}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="float-element"
              animate={{
                y: [0, 30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA;

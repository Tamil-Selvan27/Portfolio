import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import SocialLinks from '../components/SocialLinks';
import { FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import './HeroAbout.css';

const roles = ['Frontend Developer', 'Designer'];

const HeroAbout = () => {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentRole = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const fullText = roles[currentRole];
      if (isDeleting) {
        charIndex -= 1;
        setDisplayText(fullText.slice(0, charIndex));
      } else {
        charIndex += 1;
        setDisplayText(fullText.slice(0, charIndex));
      }

      if (!isDeleting && charIndex === fullText.length) {
        timeoutId = window.setTimeout(() => {
          isDeleting = true;
          type();
        }, 1200);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentRole = (currentRole + 1) % roles.length;
      }

      const delay = isDeleting ? 60 : 120;
      timeoutId = window.setTimeout(type, delay);
    };

    timeoutId = window.setTimeout(type, 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const cursorInterval = window.setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 500);

    return () => window.clearInterval(cursorInterval);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const downloadResume = async () => {
    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) throw new Error('Failed to download resume');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Tamil_Selvan_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page-container hero-about">
      <GradientBlur position="top-left" color="linear-gradient(135deg, #667eea, #764ba2)" />
      <GradientBlur position="bottom-right" color="linear-gradient(135deg, #4facfe, #00f2fe)" />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-header" variants={itemVariants}>
          <h1 className="hero-title">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm
            </motion.span>
            <motion.span
              className="name-gradient"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tamil Selvan M
            </motion.span>
          </h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            <span>I'm a </span>
            <span className="typewriter">{displayText}</span>
            <span className="cursor">{cursorVisible ? '|' : ' '}</span>
          </motion.p>
        </motion.div>

        <motion.div className="about-section" variants={itemVariants}>
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with expertise in building beautiful, interactive web experiences.
            With a focus on clean code and innovative design, I create digital solutions that inspire and engage.
          </p>
        </motion.div>

        <motion.div className="achievements" variants={containerVariants}>
          {[
            // { icon: FaCode, title: '100+ Projects', desc: 'Successfully delivered' },
            { icon: FaRocket, title: '2+ Years', desc: 'Industry Experience' },
            { icon: FaBrain, title: 'Tech Stack', desc: 'Always Learning' },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)' }}
            >
              <achievement.icon className="achievement-icon" />
              <h3>{achievement.title}</h3>
              <p>{achievement.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="hero-actions" variants={itemVariants}>
          <button type="button" onClick={downloadResume} className="resume-button">
            Download Resume
          </button>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroAbout;

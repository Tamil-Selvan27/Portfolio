import React from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import { FaReact, FaBolt, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { icon: FaReact, name: 'React', level: 95 },
    { icon: FaBolt, name: 'Lit', level: 90 },
    { icon: SiTypescript, name: 'TypeScript', level: 85 },
    { icon: SiJavascript, name: 'JavaScript', level: 88 },
    { icon: FaGitAlt, name: 'Git', level: 92 },
    { icon: FaDatabase, name: 'Basics of SQL', level: 87 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="page-container skills-page">
      <GradientBlur position="top-left" color="linear-gradient(135deg, #f093fb, #f5576c)" />
      <GradientBlur position="bottom-right" color="linear-gradient(135deg, #4facfe, #00f2fe)" />

      <motion.div
        className="skills-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="skills-title" variants={itemVariants}>
          Technical Skills
        </motion.h1>

        <motion.div className="skills-grid" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon">
                <skill.icon />
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              </div>
              <span className="skill-percentage">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  {skill.level}%
                </motion.span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;

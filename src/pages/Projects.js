import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Todo App',
      description: 'A productivity-focused todo list app with add, edit, and remove functionality.',
      tech: ['React', 'JavaScript', 'CSS'],
      image: 'placeholder',
      link: '#',
      github: '#',
    },
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
    <div className="page-container projects-page">
      <GradientBlur position="top-right" color="linear-gradient(135deg, #fa709a, #fee140)" />
      <GradientBlur position="bottom-left" color="linear-gradient(135deg, #4facfe, #00f2fe)" />

      <motion.div
        className="projects-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="projects-title" variants={itemVariants}>
          Featured Projects
        </motion.h1>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
              }}
            >
              <div className="project-image">
                <div className="image-placeholder">{project.image}</div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link" title="View Project">
                    <FaExternalLinkAlt />
                  </a>
                  <a href={project.github} className="project-link" title="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;

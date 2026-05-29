import React from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import './CodingProfiles.css';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      description: 'Solving algorithmic challenges and improving problem-solving skills',
      stats: '500+ Problems Solved',
      icon: FaCode,
      link: 'https://leetcode.com',
      color: '#FFA500',
    },
    {
      name: 'GitHub',
      description: 'Open-source contributions and personal projects',
      stats: '100+ Repositories',
      icon: FaCode,
      link: 'https://github.com',
      color: '#00D9FF',
    },
    {
      name: 'Skill Rack',
      description: 'Programming contests and coding challenges',
      stats: 'Top 5% Rank',
      icon: FaCode,
      link: 'https://skillrack.com',
      color: '#FF6B6B',
    },
    {
      name: 'CodeSignal',
      description: 'Technical assessment and coding interviews',
      stats: 'Advanced Level',
      icon: FaCode,
      link: 'https://codesignal.com',
      color: '#667EEA',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="page-container coding-profiles-page">
      <GradientBlur position="top-right" color="linear-gradient(135deg, #667eea, #764ba2)" />
      <GradientBlur position="bottom-left" color="linear-gradient(135deg, #4facfe, #00f2fe)" />

      <motion.div
        className="profiles-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="profiles-title" variants={itemVariants}>
          Coding Profiles
        </motion.h1>

        <motion.div className="profiles-grid" variants={containerVariants}>
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              variants={itemVariants}
              whileHover={{
                y: -20,
                boxShadow: `0 30px 60px ${profile.color}40`,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="profile-header" style={{ borderColor: profile.color }}>
                <div className="profile-icon" style={{ color: profile.color }}>
                  <profile.icon />
                </div>
              </div>
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
              <div className="profile-stats" style={{ color: profile.color }}>
                {profile.stats}
              </div>
              <div className="profile-link">
                View Profile <FaExternalLinkAlt />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CodingProfiles;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import AnimatedButton from '../components/AnimatedButton';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  // Automatically trigger resume download on mount and show preview
  useEffect(() => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    // Some browsers block automatic downloads; only try if running in browser
    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <div className="page-container resume-page">
      <GradientBlur position="top-left" color="linear-gradient(135deg, #4facfe, #00f2fe)" />
      <GradientBlur position="bottom-right" color="linear-gradient(135deg, #667eea, #764ba2)" />

      <motion.div
        className="resume-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="resume-title" variants={itemVariants}>
          My Resume
        </motion.h1>

        <motion.div className="resume-section" variants={itemVariants}>
          <h2>Resume Preview</h2>
          <p>If the download didn't start automatically, use the button below to download the full PDF. A preview is shown under the button.</p>
          <motion.div className="resume-item" whileHover={{ x: 10 }}>
            <h3>Download</h3>
            <p>Full resume (PDF)</p>
          </motion.div>
        </motion.div>

        <motion.div className="resume-download" variants={itemVariants}>
          <AnimatedButton
            text={<><FaDownload /> Download Full Resume</>}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            variant="primary"
            size="large"
          />
        </motion.div>

        <motion.div className="resume-preview" variants={itemVariants}>
          <iframe
            title="Resume Preview"
            src="/resume.pdf"
            style={{ width: '100%', height: '800px', border: 'none' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;

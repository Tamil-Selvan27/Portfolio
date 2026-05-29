import React from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import './Articles.css';

const Articles = () => {
  const articles = [
    {
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      date: 'December 15, 2023',
      author: 'Your Name',
      category: 'React',
      link: '#',
    },
    {
      title: 'Building Scalable Node.js Applications',
      excerpt: 'Explore best practices for architecting large-scale Node.js applications with microservices.',
      date: 'December 10, 2023',
      author: 'Your Name',
      category: 'Backend',
      link: '#',
    },
    {
      title: 'The Future of Web Performance',
      excerpt: 'Discover cutting-edge techniques to optimize web performance and improve user experience.',
      date: 'December 5, 2023',
      author: 'Your Name',
      category: 'Performance',
      link: '#',
    },
    {
      title: 'Introduction to Three.js',
      excerpt: 'A comprehensive guide to creating 3D graphics on the web using Three.js.',
      date: 'November 28, 2023',
      author: 'Your Name',
      category: '3D',
      link: '#',
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
    <div className="page-container articles-page">
      <GradientBlur position="top-left" color="linear-gradient(135deg, #4facfe, #00f2fe)" />
      <GradientBlur position="bottom-right" color="linear-gradient(135deg, #f093fb, #f5576c)" />

      <motion.div
        className="articles-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="articles-title" variants={itemVariants}>
          Featured Articles
        </motion.h1>

        <motion.div className="articles-list" variants={containerVariants}>
          {articles.map((article, index) => (
            <motion.article
              key={index}
              className="article-card"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <div className="article-header">
                <h2>{article.title}</h2>
                <span className="category-tag">{article.category}</span>
              </div>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="meta-item">
                  <FaCalendar /> {article.date}
                </span>
                <span className="meta-item">
                  <FaUser /> {article.author}
                </span>
              </div>
              <a href={article.link} className="read-more">
                Read More <FaArrowRight />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Articles;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GradientBlur from '../components/GradientBlur';
import AnimatedButton from '../components/AnimatedButton';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

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
    <div className="page-container contact-page">
      <GradientBlur position="top-right" color="linear-gradient(135deg, #667eea, #764ba2)" />
      <GradientBlur position="bottom-left" color="linear-gradient(135deg, #fa709a, #fee140)" />

      <motion.div
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="contact-title" variants={itemVariants}>
          Get In Touch
        </motion.h1>

        <motion.div className="contact-wrapper" variants={containerVariants}>
          <motion.form className="contact-form" onSubmit={handleSubmit} variants={itemVariants}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <AnimatedButton
              text={loading ? 'Sending...' : 'Send Message'}
              type="submit"
              variant="primary"
              size="large"
              disabled={loading}
            />
          </motion.form>
        </motion.div>

        {submitted && (
          <motion.div
            className="success-notification"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <FaCheck /> Message sent successfully!
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;

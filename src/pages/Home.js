// Home.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import heroBg from '../assets/wooden-spoons.jpeg';
import productsBg from '../assets/wooden-spoons3.jpeg';
import processImage from '../assets/process.png';

import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: productsRef, inView: productsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="home-container" style={{ cursor: 'default' }}>
      {/* Hero Section */}
      <motion.section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content" onClick={() => navigate('/products')}>
          <h1>100% Sri Lankan Wooden Spoons</h1>
          <p>Made with sustainable Sri Lankan raw materials under a fully automated process.</p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="about-container" ref={aboutRef}>
        <motion.div
          className="about"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <h1>Who we are?</h1>
          <p>
            Boards & Shades Pvt Ltd specializes in manufacturing eco-friendly wooden spoons using high-quality Sri Lankan wood.
            These wooden spoons are 100% Sri Lankan products.
          </p>
          <motion.button whileHover={{ scale: 1.1 }} className="cta-button" onClick={() => navigate('/about')}>
            Explore More
          </motion.button>
        </motion.div>
      </section>

      {/* Products Section */}
      <motion.section
        className="products"
        ref={productsRef}
        style={{ backgroundImage: `url(${productsBg})` }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: productsInView ? 0 : -100, opacity: productsInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="product-content">
          <h2>Our Products</h2>
          <p>We provide premium wooden spoons that are biodegradable, sustainable, and perfect for any occasion.</p>
          <motion.button whileHover={{ scale: 1.1 }} className="cta-button" onClick={() => navigate('/products')}>
            View Products
          </motion.button>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="process"
        ref={processRef}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: processInView ? 1 : 0, x: processInView ? 0 : 100 }}
        transition={{ duration: 1 }}
      >
        <div className="process-content">
          <h2>Our Process</h2>
          <p>We follow a fully automated, eco-friendly manufacturing process ensuring sustainability and top quality.</p>
          <motion.button whileHover={{ scale: 1.1 }} className="cta-button" onClick={() => navigate('/process')}>
            Show Process
          </motion.button>
        </div>
        <div className="process-image-container">
          <img src={processImage} alt="Manufacturing Process" className="process-img" />
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons">
          <motion.div whileHover={{ scale: 1.05 }} className="reason">
            <FaLeaf size={40} color="#3b7d22" />
            <p>Eco-Friendly</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="reason">
            <FaLeaf size={40} color="#3b7d22" />
            <p>100% Sri Lankan</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="reason">
            <FaLeaf size={40} color="#3b7d22" />
            <p>Premium Quality</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
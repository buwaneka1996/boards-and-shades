import React from "react";
//import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" style={{ cursor: 'default' }}>
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h2>Boards & Shades</h2>
          <p>Eco-friendly, 100% Sri Lankan wooden spoons manufactured with precision.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/products">Product</a></li>
            <li><a href="/process">Process</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <strong>
              <a href="mailto:packmelankasales@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                packmelankasales@gmail.com
              </a>
            </strong>
          </p>
          <p>
            Phone:{" "}
            <strong>
              <a href="tel:+94772209406" style={{ color: 'inherit', textDecoration: 'none' }}>
                +94 77 220 9406 
              </a>
            </strong>
          </p>
          <p>
            <strong>Boards & Shades Pvt Ltd, Canal Road, Malabe, Sri Lanka.</strong>
          </p>
        </div>

        {/* /* Social Media Links 
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>*/}

      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Boards & Shades Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useEffect } from "react";
import "../styles/About.css";
import aboutImage from "../assets/about.jpg"; // Add an image related to your company

const About = () => {

  useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

  return (
    <div className="about-container" style={{ cursor: 'default' }}>
      <div className="about-header">
        <h1>Boards & Shades Pvt Ltd</h1>
        <p>Crafting eco-friendly wooden spoons with passion and sustainability.</p>
      </div>

      <div className="vision">
        <h2>Our Vision</h2>
        <p>To become a global leader in sustainable wooden cutlery and inspire a greener future.</p>
      </div>

      <div className="about-content">
        <img src={aboutImage} alt="About Us" className="about-image" />
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Boards & Shades Pvt Ltd is dedicated to producing high-quality <strong>100% Sri Lankan wooden spoons</strong>, using
            <strong> locally sourced raw materials</strong>. Our mission is to provide sustainable, biodegradable alternatives to
            plastic cutlery, helping to preserve the environment for future generations.
          </p>
          <h2 className="choose-us">Why Choose Us?</h2>
          <ul>
            <li> 100% Sri Lankan raw materials</li>
            <li> Fully automated, eco-friendly manufacturing process</li>
            <li> High durability and smooth finish</li>
            <li> Commitment to sustainability and reducing plastic waste</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default About;
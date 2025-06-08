import React, { useEffect } from "react";
import "../styles/Process.css";
import process1 from "../assets/machine1.jpeg"; // Add process images
import process2 from "../assets/process2.jpg";
import process3 from "../assets/machine2.jpeg";
import processVideo from "../assets/processVideo.mp4";
import spoonCutting from "../assets/spooncutting.mp4";

const Process = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const steps = [
    {
      id: 1,
      title: "Automated Precision Cutting",
      image: process2,
      description:
        "Our fully automated machinery precisely cuts the wood into spoon shapes, ensuring uniformity and perfection.",
    
      },
    {
      id: 2,
      title: "Sourcing Sri Lankan Wood",
      image: process1,
      description:
        "We carefully select high-quality, sustainable Sri Lankan wood to ensure durability and eco-friendliness.",
    },
    {
      id: 3,
      title: "Polishing & Finishing",
      image: process3,
      description:
        "The spoons undergo a polishing process for a smooth finish, ensuring a safe and premium feel.",
    },
  ];

  return (
    <div className="process-container" style={{ cursor: 'default' }}>
      <h1>Our Manufacturing Process</h1>
      <p>Discover how our eco-friendly wooden spoons are made with precision and care.</p>

      {/* Process Video */}
      <div className="process-video-wrapper">
        <video
          src={processVideo}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="process-video"
        />
      </div>
      
      <div className="process-list">
        {steps.map((step) => (
          <div key={step.id} className="process-card">
            {step.id === 1 ? (
              <video
                src={spoonCutting}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="spoon-cutting-video"
              />
            ) : (
              <img src={step.image} alt={step.title} />
            )}
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
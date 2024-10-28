import React, { useEffect, useState } from 'react';
import '../css/HeroSection.css';
import AnimatedBackground from './AnimatedBackground';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="home" className={`hero-section ${loaded ? 'loaded' : ''}`}>
      <AnimatedBackground />
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Tori Stecum Traduction et Révision</h1>
        <p className="hero-subheading">Your Partner for Quality Language Services</p>

        <p className="hero-message">
          Hello and welcome! Looking for expert translation or linguistic services/advice whether it’s to connect better with people and break down those language barriers? You’ve come to the right place. Whether you’re an organization, a business, an entrepreneur, or simply looking to connect with friends from different corners of the world, our translation services will be tailored to meet your diverse needs.
        </p>

        <p className="hero-message">
          We value contextually relevant accuracy and sensitivity with contemporary language nuances. We deliver translations that not only capture the essence of the source material but also resonate with modern-day English or French expressions. We take pride in ensuring that our translations are not only accurate but also culturally relevant, making your content resonate effectively with today’s audiences. All of this with speed and efficiency, to get you the desired final result as quickly as possible. ⚡
        </p>

        <div className="cta-button-container">
          <a href="mailto:toristecum.translations@gmail.com" className="cta-button">
            Send an Email! 
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../LanguageContext';
import translations from '../Translations';
import '../css/HeroSection.css';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Add animation class after component mounts for entrance animation
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className={`hero-section ${loaded ? 'loaded' : ''}`}>
      <div className="hero-background">
        {/* Animated background circles */}
        {[...Array(10)].map((_, index) => (
          <div 
            key={index} 
            className="circle" 
            style={{
              width: `${20 + Math.random() * 100}px`,
              height: `${20 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 30}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          />
        ))}
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="title">{t.hero.title} <span>{t.hero.titleSpan}</span></h1>
          <h2 className="subtitle">{t.hero.subtitle}</h2>
          
          <div className="description">
            <p>{t.hero.welcome}</p>
            <p>{t.hero.description1}</p>
            <p>{t.hero.description2}</p>
          </div>
          
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
            className="cta-button"
          >
            {t.hero.ctaButton}
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../LanguageContext';
import translations from '../Translations';
import '../css/NavBar.css';

const NavBar = ({ scrolled }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  // Logo is represented as an SVG directly in the component for better control
  const Logo = () => (
    <svg viewBox="0 0 200 60" className="logo">
      <text x="10" y="40" fill="#035214" fontFamily="'Exo', sans-serif" fontSize="24" fontWeight="bold">
        Tori Stecum
      </text>
      <text x="10" y="55" fill="#333" fontFamily="'Exo', sans-serif" fontSize="12">
        {language === 'en' ? 'Translation and Revision' : 'Traduction et Révision'}
      </text>
    </svg>
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'translation', 'revision', 'copywriting', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const offset = 100; // Adjust this value as needed
        
        if (rect.top <= offset && rect.bottom > offset) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'translation', label: t.nav.translation },
    { id: 'revision', label: t.nav.revision },
    { id: 'copywriting', label: t.nav.copywriting },
    { id: 'contact', label: t.nav.contact }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand" onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setMenuOpen(false);
        }}>
          <Logo />
        </div>
        
        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
          <li className="language-switch">
            <button onClick={toggleLanguage} className="language-toggle">
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
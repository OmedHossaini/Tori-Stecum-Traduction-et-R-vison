import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import '../css/NavBar.css';
import logo from '../Tori Stecum.png';

const NavBar = ({ scrolled }) => {
  const [activePage, setActivePage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      const translationSection = document.getElementById('translation');
      const revisionSection = document.getElementById('revision');
      const copywritingSection = document.getElementById('copywriting');
      const contactSection = document.getElementById('contact'); // Added contact section

      const translationOffset = translationSection ? translationSection.offsetTop : Infinity;
      const revisionOffset = revisionSection ? revisionSection.offsetTop : Infinity;
      const copywritingOffset = copywritingSection ? copywritingSection.offsetTop : Infinity;
      const contactOffset = contactSection ? contactSection.offsetTop : Infinity; // Added contact offset

      if (scrollOffset < translationOffset) {
        setActivePage(0);
      } else if (scrollOffset < revisionOffset) {
        setActivePage(1);
      } else if (scrollOffset < copywritingOffset) {
        setActivePage(2);
      } else if (scrollOffset < contactOffset) {
        setActivePage(3); 
      } else {
        setActivePage(4);
      }
    };

    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActivePage(to);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false); 
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container" onClick={scrollToTop}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive(0)}
              onClick={() => setMenuOpen(false)}
              className={activePage === 0 ? 'active' : ''}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="translation"
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive(1)}
              onClick={() => setMenuOpen(false)}
              className={activePage === 1 ? 'active' : ''}
            >
              Translation Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="revision"
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive(2)}
              onClick={() => setMenuOpen(false)}
              className={activePage === 2 ? 'active' : ''}
            >
              Revision and Proofreading
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="copywriting"
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive(3)}
              onClick={() => setMenuOpen(false)}
              className={activePage === 3 ? 'active' : ''}
            >
              Copywriting Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact" // Added contact link
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive(4)} // Updated active page for contact
              onClick={() => setMenuOpen(false)}
              className={activePage === 4 ? 'active' : ''}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

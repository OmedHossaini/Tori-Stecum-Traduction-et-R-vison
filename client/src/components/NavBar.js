// NavBar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import '../css/NavBar.css';
import logo from '../Tori Stecum.png';

const NavBar = ({ scrolled }) => {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      // Use your section offsets here
      const translationOffset = document.getElementById('translation').offsetTop;
      const revisionOffset = document.getElementById('revision').offsetTop;
      const copywritingOffset = document.getElementById('copywriting').offsetTop;
      const contactOffset = document.getElementById('contact').offsetTop;

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
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" onClick={scrollToTop} />
        </div>
        <ul className="nav-links">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive(0)}
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
              className={activePage === 3 ? 'active' : ''}
            >
              Copywriting Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onSetActive={() => handleSetActive(4)}
              className={activePage === 4 ? 'active' : ''}
            >
              Contact Me
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

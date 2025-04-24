import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../LanguageContext';
import translations from '../Translations';
import '../css/Footer.css';

const Footer = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <h3>Tori Stecum</h3>
              <p>{language === 'en' ? 'Translation and Revision' : 'Traduction et Révision'}</p>
            </div>
            <p className="tagline">{t.footer.tagline}</p>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <ScrollLink
                  to="translation"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer-nav-link"
                >
                  {t.nav.translation}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="revision"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer-nav-link"
                >
                  {t.nav.revision}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="copywriting"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="footer-nav-link"
                >
                  {t.nav.copywriting}
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>{t.nav.contact}</h4>
            <p>Email: info@toristecum.com</p>
            <p>{language === 'en' ? 'Montreal, Canada' : 'Montréal, Canada'}</p>
            <button onClick={toggleLanguage} className="language-button">
              {t.footer.switchLanguage}
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Tori Stecum {language === 'en' ? 'Translation and Revision' : 'Traduction et Révision'}. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
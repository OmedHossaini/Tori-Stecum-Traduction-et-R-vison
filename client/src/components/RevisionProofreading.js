import React from 'react';
import { useLanguage } from '../LanguageContext';
import translations from '../Translations';
import '../css/RevisionProofreading.css';

const RevisionProofreading = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="revision" className="revision-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.revision.title}</h2>
          <div className="underline"></div>
        </div>
        
        <div className="content-wrapper">
          <div className="text-content">
            <p className="main-description">{t.revision.description}</p>
            <p className="emphasis">{t.revision.emphasis}</p>
          </div>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </div>
              <h3>{t.revision.grammar}</h3>
              <p>{t.revision.grammarDesc}</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
                </svg>
              </div>
              <h3>{t.revision.style}</h3>
              <p>{t.revision.styleDesc}</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="#035214" strokeWidth="2" fill="none">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4M12 16h.01"></path>
                </svg>
              </div>
              <h3>{t.revision.consistency}</h3>
              <p>{t.revision.consistencyDesc}</p>
            </div>
            
            <div className="service-item">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <h3>{t.revision.polishing}</h3>
              <p>{t.revision.polishingDesc}</p>
            </div>
          </div>
          
          <div className="action-note">
            <p>{t.revision.actionNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevisionProofreading;
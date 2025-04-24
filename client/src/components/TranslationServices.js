import React from 'react';
import { useLanguage } from '../LanguageContext';
import translations from '../Translations';
import '../css/TranslationServices.css';

const TranslationServices = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="translation" className="translation-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.translation.title}</h2>
          <div className="underline"></div>
        </div>
        
        <div className="content-grid">
          <div className="text-content">
            <p>{t.translation.intro}</p>
            <p>{t.translation.specialties}</p>
            
            <h3>{t.translation.languagePairsTitle}</h3>
            <div className="language-pairs">
              <div className="language-pair">
                <div className="language-icon">FR</div>
                <div className="arrow">→</div>
                <div className="language-icon">EN</div>
                <div className="language-label">{t.translation.frToEn}</div>
              </div>
              
              <div className="language-pair">
                <div className="language-icon">EN</div>
                <div className="arrow">→</div>
                <div className="language-icon">FR</div>
                <div className="language-label">{t.translation.enToFr}</div>
              </div>
            </div>
            
            <div className="note">
              <p>{t.translation.otherLanguages}</p>
            </div>
          </div>
          
          <div className="visual-content">
            <div className="service-card">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>{t.translation.documentTranslation}</h3>
              <p>{t.translation.documentDesc}</p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"></path>
                </svg>
              </div>
              <h3>{t.translation.localization}</h3>
              <p>{t.translation.localizationDesc}</p>
            </div>
            
            <div className="service-card">
              <div className="icon-container">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="#035214" strokeWidth="2" fill="none">
                  <path d="M7 8h10M7 12h10M7 16h10M3 20h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3>{t.translation.specializedContent}</h3>
              <p>{t.translation.specializedDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslationServices;
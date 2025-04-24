import React from 'react';
import { useLanguage } from '../LanguageContext';
import translations from '../Translations';
import '../css/CopyWritingServices.css';

const CopywritingServices = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Copywriting categories and examples
  const copywritingTypes = [
    {
      title: t.copywriting.websiteContent,
      description: t.copywriting.websiteDesc,
      examples: t.copywriting.websiteExamples
    },
    {
      title: t.copywriting.marketingMaterials,
      description: t.copywriting.marketingDesc,
      examples: t.copywriting.marketingExamples
    },
    {
      title: t.copywriting.creativeContent,
      description: t.copywriting.creativeDesc,
      examples: t.copywriting.creativeExamples
    }
  ];

  return (
    <section id="copywriting" className="copywriting-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.copywriting.title}</h2>
          <div className="underline"></div>
        </div>
        
        <div className="main-content">
          <div className="intro-text">
            <p>{t.copywriting.intro}</p>
          </div>
          
          <div className="copywriting-grid">
            {copywritingTypes.map((type, index) => (
              <div className="copywriting-card" key={index}>
                <div className="card-header">
                  <h3>{type.title}</h3>
                </div>
                <div className="card-body">
                  <p>{type.description}</p>
                  <ul className="examples-list">
                    {type.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="copywriting-process">
            <h3>{t.copywriting.processTitle}</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>{t.copywriting.discovery}</h4>
                  <p>{t.copywriting.discoveryDesc}</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>{t.copywriting.research}</h4>
                  <p>{t.copywriting.researchDesc}</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>{t.copywriting.creation}</h4>
                  <p>{t.copywriting.creationDesc}</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>{t.copywriting.refinement}</h4>
                  <p>{t.copywriting.refinementDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopywritingServices;
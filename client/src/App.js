import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from './LanguageContext';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import TranslationServices from './components/TranslationServices';
import RevisionProofreading from './components/RevisionProofreading';
import CopywritingServices from './components/CopyWritingServices'; 
import Contact from './components/Contact';
import Footer from './components/footer';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <NavBar scrolled={scrollPosition > 50} />
        <main className="content">
          <HeroSection />
          <TranslationServices />
          <RevisionProofreading />
          <CopywritingServices />
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
        <Analytics />
      </div>
    </LanguageProvider>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import TranslationServices from './components/TranslationServices';
import RevisionProofreading from './components/RevisionProofreading';
import CopywritingServices from './components/CopyWritingServices';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"; // Importing Vercel Analytics

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar scrolled={scrollPosition > 50} />
        <div className="scrollable-content">
          <HeroSection />
          <TranslationServices />
          <RevisionProofreading />
          <CopywritingServices />
          <div id="contact"> 
            <Contact />
          </div>
        </div>
        <footer className="App-footer">
          <p>Contact us for high-quality language services tailored to your needs.</p>
        </footer>
        <Analytics /> 
      </div>
    </Router>
  );
}

export default App;

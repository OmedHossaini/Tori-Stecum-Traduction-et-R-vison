// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import TranslationServices from './components/TranslationServices';
import RevisionProofreading from './components/RevisionProofreading';
import CopywritingServices from './components/CopyWritingServices';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <div className="App">
        
        <NavBar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/translation" element={<TranslationServices />} />
          <Route path="/revision" element={<RevisionProofreading />} />
          <Route path="/copywriting" element={<CopywritingServices />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>

        <footer className="App-footer">
          <p>Contact us for high-quality language services tailored to your needs.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

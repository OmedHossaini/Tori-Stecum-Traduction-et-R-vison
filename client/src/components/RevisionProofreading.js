import React, { useEffect, useState } from 'react';
import '../css/RevisionProofreading.css';
import AnimatedBackground from './AnimatedBackground';

const RevisionProofreading = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
  <div id="revision" className={`RevisionProofreading-container ${loaded ? 'loaded' : ''}`}>
    <AnimatedBackground />
    <h2 className="RevisionProofreading-heading">Revision and Proofreading</h2>
    <p className="RevisionProofreading-paragraph">While AI tools have made significant strides in language processing, the nuanced understanding and contextual finesse provided by human proofreading still surpass the capabilities of automated solutions. All you need is a revisor’s eagle eye to make sure your text is polished to perfection, prior to its publication. We are professional grammatical errors, typos, or inconsistency catchers. 🎣</p>
  </div>
);
  };

export default RevisionProofreading;

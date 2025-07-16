import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const phrases = ["DevOps Engineer", "Cloud Enthusiast", "Open Source Contributor"];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && forward) {
      setTimeout(() => setForward(false), 1000);
      return;
    }
    if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((index + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (forward ? 1 : -1));
      setText(phrases[index].substring(0, subIndex));
    }, forward ? 150 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Sridevi Velpula</h1>
        <p className="typing">{text}</p>
        <img src="assets/profile.jpg" alt="Sridevi Velpula" className="profile-pic" />
      </div>
    </section>
  );
};

export default Hero;


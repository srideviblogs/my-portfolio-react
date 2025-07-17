import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Expertise from "./components/Expertise";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Expertise />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Scroll-Spy Observer: Highlight active menu item based on viewport scroll
    const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'certificates', 'contact'];
    
    const scrollSpyOptions = {
      root: null, // Viewport
      rootMargin: '-30% 0px -60% 0px', // Center region of viewport triggers intersection
      threshold: 0
    };

    const scrollSpyCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const scrollSpyObserver = new IntersectionObserver(scrollSpyCallback, scrollSpyOptions);
    
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) scrollSpyObserver.observe(element);
    });

    // 2. Scroll-Reveal Observer: Trigger slide-in fade-in animation as elements enter viewport
    const revealOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters fully
      threshold: 0.1 // 10% visible
    };

    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    // Cleanup observers on unmount
    return () => {
      scrollSpyObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Glow Backdrops across the layout */}
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

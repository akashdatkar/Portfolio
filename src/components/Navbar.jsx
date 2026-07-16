import React, { useState, useEffect } from 'react';
import resumeFile from '../assets/resume.pdf';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setMobileMenuOpen(false);
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="logo-text">
          Akash<span>.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={resumeFile}
            download="Akash_Datkar_Resume.pdf"
            className="resume-btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleLinkClick(e, link.id)}
            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
          >
            {link.name}
          </a>
        ))}
        <a
          href={resumeFile}
          download="Akash_Datkar_Resume.pdf"
          className="mobile-resume-btn"
          onClick={() => setMobileMenuOpen(false)}
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

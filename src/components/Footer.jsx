import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-content">
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            Akash<span>.</span>
          </a>
          <p className="footer-text">
            Designing and developing premium digital solutions. Driven by performance, accessibility, and modern aesthetics.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a
              href="https://github.com/akashdatkar"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="footer-separator">/</span>
            <a
              href="https://www.linkedin.com/in/akashdatkar/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
          
          <div className="copyright-container">
            <p>© {new Date().getFullYear()} Akash Datkar. All rights reserved.</p>
            <p className="credit-text">Built with React & Vite</p>
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="arrow-up-svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import avatarImg from '../assets/avatar.png';
import resumeFile from '../assets/resume.pdf';

const Hero = () => {
  const titles = ['Full Stack Web Developer', 'MERN Stack Developer', 'AI Integration Enthusiast', 'Open Source Contributor', 'Engineering Student'];
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitleIdx];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIdx((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIdx]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:apdatkar2004@gmail.com?subject=Hello%20Akash';
  };

  return (
    <section id="home" className="hero-section">
      {/* Dynamic particles in background */}
      <ParticleBackground />

      {/* Grid line overlay */}
      <div className="grid-overlay"></div>

      {/* Blue & Purple Radial Lights */}
      <div className="glow-orb blue-glow"></div>
      <div className="glow-orb purple-glow"></div>

      <div className="hero-content container">
        <div className="hero-text-side">
          <div className="welcome-tag">
            <span>Available for Opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text-blue-purple">Akash Datkar</span>
          </h1>

          <h2 className="hero-subtitle">
            I am a <span className="typed-text">{currentText}</span>
            <span className="typed-cursor">|</span>
          </h2>

          <p className="hero-description">
            Crafting premium, scalable web applications that combine state-of-the-art backend architectures with stunning, responsive user interfaces. Focused on AI integrations and open-source contributions.
          </p>

          <div className="hero-actions">
            <a href={resumeFile} download="Akash_Datkar_Resume.pdf" className="btn btn-primary glow-btn">
              Download CV
            </a>
            <a href="#contact" onClick={handleContactClick} className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/akashdatkar"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akashdatkar/"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:apdatkar2004@gmail.com"
              onClick={handleEmailClick}
              className="social-icon-btn"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon-svg"
              >
                <path d="M1.5 4.5h21a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5zm0 2.25v.243l10.5 6.562 10.5-6.562V6.75L12 13.312 1.5 6.75z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            <img src={avatarImg} alt="Akash Datkar Avatar" className="avatar-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import kindnessCabinetImg from '../assets/kindness_cabinet.jpeg';
import AgriAIImg from '../assets/AgriAIImg.jpeg';
import InterviewAIImg from '../assets/InterviewAIImg.png';

const Projects = () => {
  const projectsData = [
    {
      title: 'InterviewIQ',
      subtitle: 'Analyze. Match. Succeed.',
      image: InterviewAIImg,
      desc: 'InterviewIQ is an AI-powered platform that analyzes your resume, job description, and self-assessment to generate detailed interview reports, identify strengths and gaps, and provide personalized recommendations to improve your job readiness and role fit.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API','Postman'],
      features: [
        '🎯 Job Match Analysis — Evaluates how well a candidate fits a specific job role.',
        '📊 AI Interview Reports — Generates detailed interview readiness and performance insights',
        '📄 Resume Optimization — Suggests improvements tailored to the target job description.',
        '🚀 Personalized Career Guidance — Identifies skill gaps and recommends growth opportunities'
      ],
      liveUrl: 'https://github.com/akashdatkar',
      githubUrl: 'https://github.com/akashdatkar/interview-ai',
    },
    {
      title: 'AgriAI',
      subtitle: 'AI-powered agricultural assistant for soil analysis and plant disease detection.',
      image: AgriAIImg,
      desc: 'AgriAI is a comprehensive full-stack agricultural platform designed to empower farmers and agricultural enthusiasts. By leveraging advanced Machine Learning models and Large Language Models (LLM), AgriAI provides precise soil analysis, accurate crop recommendations, and reliable plant disease detection with actionable treatment advice.',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Groq API','FastAPI','Postman'],
      features: [
        '🌍 Soil Analysis: Upload a soil photo along with parameters to receive AI-driven crop recommendations.',
        '🍃 Disease Detection: Upload a plant leaf photo to instantly identify diseases and get tailored treatment advice.',
        '🔐 Secure Authentication: Robust user authentication system powered by Node.js and MongoDB.',
        '🤖 LLM Integration: Integrated with Groq (Llama 3.3) for intelligent, conversational agricultural insights.'
      ],
      liveUrl: 'https://github.com/akashdatkar',
      githubUrl: 'https://github.com/akashdatkar',
    },
    {
      title: 'Kindness Cabinet',
      subtitle: 'Sustainable P2P Donation Platform',
      image: kindnessCabinetImg,
      desc: 'An Android-based application Kindness Cabinet is a digital donation & resale platform that enables users to share, donate, or resell unused items such as clothes, books, gadgets, toys, furniture, and household goods.',
      tags: ['Android Studio', 'XML', 'MySQL', 'PHP', 'Postman', 'Sublime Text'],
      features: [
        '👤Secure Authentication – Google Sign-In, OTP login, password protection, session management',
        '📦Item Listing & Management – Photos, category, toggle between donation/resale',
        '🌐Location-Based Services – Google Maps API for nearby items & donors',
        '🔔Real-Time Notifications – New items, chat messages, donations, offers'
      ],
      liveUrl: 'https://github.com/akashdatkar/kindness-cabinet',
      githubUrl: 'https://github.com/akashdatkar/Kindness-Cabinet-Donation-Resale-Android-App-Final-Year-IT-Project.git',
    }
  ];

  return (
    <section id="projects" className="projects-section scroll-reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="header-bar"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="glass-card project-card" key={index}>
              <div className="project-image-container">
                <div className="project-image-overlay"></div>
                <img src={project.image} alt={project.title} className="project-img" />
              </div>

              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span className="project-tag-badge" key={tIdx}>{tag}</span>
                  ))}
                </div>

                <h3 className="project-title-text">{project.title}</h3>
                <span className="project-subtitle-text">{project.subtitle}</span>
                <p className="project-description-text">{project.desc}</p>

                <div className="project-features-list">
                  <h4 className="features-header">Key Features:</h4>
                  <ul>
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="check-icon-svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="btn-icon-svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="btn-icon-svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

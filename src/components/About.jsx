import React from 'react';

const About = () => {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A57.778 57.778 0 0012 15.75a57.778 57.778 0 005.25-4.425V15" />
        </svg>
      ),
      title: 'Engineering Foundation',
      desc: 'Information Technology student grounded in computer science principles, database modeling, and systems engineering.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
      ),
      title: 'Full Stack Development',
      desc: 'Passionate about bridging frontend aesthetics with highly efficient backends, managing state, APIs, and microservices.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h7.938l-1.154-7.215a9.717 9.717 0 00-2.515-3.86l-1.93-1.897a8.966 8.966 0 00-6.19 3.097L3.75 13.5m10.25-3.5L14 3.75M14 3.75h-.008z" />
        </svg>
      ),
      title: 'AI Integration',
      desc: 'Integrating Large Language Models and semantic indexing into application workflows to deliver next-gen features.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="card-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: 'Open Source Advocate',
      desc: 'Sharing projects online, building reusable developer tools, and actively contributing to open repositories.',
    },
  ];

  return (
    <section id="about" className="about-section scroll-reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Identity</span>
          <h2 className="section-title">About Me</h2>
          <div className="header-bar"></div>
        </div>

        <div className="about-grid">
          <div className="about-bio-column">
            <h3 className="bio-lead-in">
              An aspiring engineer on a mission to build <span className="highlight-text">smarter, faster, and elegant</span> digital experiences.
            </h3>
            <p className="bio-paragraph">
              Hello! I'm Akash Datkar, an Information Technology👩‍💻 undergraduate (B.Tech IT ’28 at DYPCOE, Akurdi | Diploma IT ’25 at GPMZR) with a strong interest in Full Stack Web Development, MERN Development, Java Programming, and Data Structures & Algorithms (DSA).
            </p>
            <p className="bio-paragraph">
              I completed my Diploma in Information Technology from GPMZR (Class of 2025), gaining hands-on exposure through industrial training and an internship at Mountreach Solutions Pvt. Ltd. There, I specialized in Full Stack Android Development, working with Java, XML, PHP, MySQL, and developing web services & APIs. My final-year Android project Kindness Cabinet focused on delivering impactful solutions.
            </p>

            <div className="career-objective-box">
              <h4 className="objective-title">Career Objective</h4>
              <p className="objective-text">
                To leverage my technical competencies in Full Stack Web Development and AI integration in a collaborative developer environment, contributing to innovative open-source projects while continuously advancing my systems engineering expertise.
              </p>
            </div>
          </div>

          <div className="about-cards-column">
            {cards.map((card, index) => (
              <div className="glass-card about-card" key={index}>
                <div className="card-icon-wrapper">{card.icon}</div>
                <div className="card-text">
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


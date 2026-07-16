import React from 'react';

const Education = () => {
  const educationData = [
    {
      date: '2025 - Present',
      title: 'Bachelor of Technology (B.Tech)',
      subtitle: 'Information Technology',
      organization: 'D Y Patil College of Engineering Akurdi, Pune',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="timeline-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.68 0-5.302.136-7.882.4M16.5 21V10.332A48.36 48.36 0 0012 9.75c-2.68 0-5.302.136-7.882.4" />
        </svg>
      ),
      details: [
        'Focusing on advanced algorithms, distributed systems, and modern architectural design patterns.',
        'Actively researching AI integration patterns in SaaS and full-stack environments.',
        'Collaborating in student development teams to deploy scalable systems and open-source packages.'
      ]
    },
    {
      date: '2022 - 2025',
      title: 'Diploma',
      subtitle: 'Information Technology',
      organization: 'Government Polytechnic, Murtizapur',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="timeline-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A57.778 57.778 0 0012 15.75a57.778 57.778 0 005.25-4.425V15" />
        </svg>
      ),
      details: [
        'Mastered foundational programming concepts in Java, C++, and object-oriented programming (OOP).',
        'Studied database management systems (DBMS), basic networking protocols, and systems analysis.',
        'Graduated with strong technical and academic benchmarks in computational projects.'
      ]
    }
  ];

  return (
    <section id="education" className="experience-section scroll-reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Learning</span>
          <h2 className="section-title">Education</h2>
          <div className="header-bar"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {educationData.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="timeline-marker">
                <div className="marker-inner">
                  {item.icon}
                </div>
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-subtitle">
                  {item.subtitle} @ <span className="org-highlight">{item.organization}</span>
                </div>

                <ul className="timeline-details-list">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx}>
                      <span className="detail-bullet"></span>
                      <p className="detail-text">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

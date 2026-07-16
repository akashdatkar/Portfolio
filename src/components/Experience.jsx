import React from 'react';

const Experience = () => {
  const timelineData = [
    {
      date: 'Aug 2024 - Nov 2024',
      title: 'Android Developer',
      subtitle: 'Internship',
      organization: 'Mountreach Solution Pvt. Ltd.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="timeline-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      details: [
        'Designed database schemas using MySQL & configured Apache local hosting with XAMPP.',
        'Created custom RESTful web services in PHP using Sublime Text to establish communication bridges.',
        'Conducted thorough API testing using Postman to verify secure payload transfer and response latency.',
        'Promotes sustainability by reducing waste and encouraging eco-friendly reuse'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section scroll-reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career</span>
          <h2 className="section-title">Experience</h2>
          <div className="header-bar"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {timelineData.map((item, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              {/* Timeline marker */}
              <div className="timeline-marker">
                <div className="marker-inner">
                  {item.icon}
                </div>
              </div>

              {/* Timeline content box */}
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

export default Experience;

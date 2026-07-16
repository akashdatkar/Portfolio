import React, { useState } from 'react';
import certPreviewImage from '../assets/cert-preview.png';
import IntershipCertificate from '../assets/IntershipCertificate.jpg';
import ReactBootcamp from '../assets/ReactBootcamp.png';
import EFSETCertificate from '../assets/EFSETCertificate.png';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificatesData = [
    {
      title: 'Full Stack Android Developer',
      issuer: 'Mountreach Solution Pvt. Ltd.',
      date: 'Nov 2024',
      credentialId: 'MAP-G5829384-N2039481',
      verifyUrl: 'https://www.linkedin.com/company/mountreach-solution-pvt-ltd/',
      previewImage: IntershipCertificate,
      skills: ['Android Studio', 'Java', 'XMl', 'PHP', 'MySql', 'REST APIs']
    },
    {
      title: 'React Bootcamp',
      issuer: 'LetsUpgrade',
      date: 'Mar 2026',
      credentialId: 'LUERJSFEB126145',
      verifyUrl: 'https://letsupgrade.in/certificates',
      previewImage: ReactBootcamp,
      skills: ['React Hooks', 'Context API', 'Redux Toolkit', 'Performance']
    },
    {
      title: 'EF SET English Certificate 66/100 (C1 Advanced)',
      issuer: 'EF SET',
      date: 'Arp 2026',
      credentialId: '-',
      verifyUrl: 'https://cert.efset.org/en/aTrY5N',
      previewImage: EFSETCertificate,
      skills: ['English']
    }
  ];

  const openPreview = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closePreview = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section id="certificates" className="certificates-section scroll-reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Achievements</span>
          <h2 className="section-title">Licenses & Certificates</h2>
          <div className="header-bar"></div>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div className="glass-card certificate-card" key={index}>
              <div className="cert-header">
                <div className="award-badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ribbon-svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0M9 10.5h.008v.008H9V10.5zm.6 5.6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.75-5.6h.008v.008h-.008V10.5zm.6 5.6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM11.25 12a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" />
                  </svg>
                </div>
                <div className="cert-date">{cert.date}</div>
              </div>

              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  Issued by: <span className="issuer-highlight">{cert.issuer}</span>
                </div>

                {cert.credentialId && (
                  <div className="cert-credential-id">
                    Credential ID: <code>{cert.credentialId}</code>
                  </div>
                )}

                <div className="cert-skills">
                  {cert.skills.map((skill, sIdx) => (
                    <span className="cert-skill-tag" key={sIdx}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="cert-footer">
                <button
                  onClick={() => openPreview(cert.previewImage)}
                  className="btn btn-secondary btn-xs verify-link-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="external-link-svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644C3.76 8.19 7.533 5.982 11.174 5.982c3.642 0 7.414 2.208 9.138 5.696.115.232.115.485 0 .718-1.724 3.488-5.496 5.696-9.138 5.696-3.642 0-7.414-2.208-9.138-5.696z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Preview
                </button>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-xs verify-link-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="external-link-svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closePreview}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closePreview}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={selectedImage} alt="Certificate Preview" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;

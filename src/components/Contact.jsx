import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:apdatkar2004@gmail.com?subject=Hello%20Akash';
  };

  return (
    <section id="contact" className="contact-section scroll-reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Connection</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="header-bar"></div>
        </div>

        <div className="contact-wrapper">
          {/* Info Side */}
          <div className="contact-info-column">
            <h3 className="contact-info-title">Let's discuss a project or opportunity!</h3>
            <p className="contact-info-desc">
              I am always excited to discuss full-stack development roles, AI project integrations, or open-source collaborations. Fill out the form or reach out directly via my socials.
            </p>

            <div className="info-cards-list">
              <div className="info-detail-card">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="info-svg-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Email Me</span>
                  <a href="mailto:apdatkar2004@gmail.com" onClick={handleEmailClick} className="info-value">apdatkar2004@gmail.com</a>
                </div>
              </div>

              <div className="info-detail-card">
                <div className="info-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="info-svg-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="info-card-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-card contact-form-card">
            {status === 'success' ? (
              <div className="form-success-container">
                <div className="success-checkmark-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="success-check-svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out, Akash. Your message has been received, and I will get back to you as soon as possible.
                </p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary btn-sm success-reset-btn">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row-2">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                      disabled={status === 'sending'}
                    />
                    {errors.name && <span className="error-message-text">{errors.name}</span>}
                  </div>

                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                      disabled={status === 'sending'}
                    />
                    {errors.email && <span className="error-message-text">{errors.email}</span>}
                  </div>
                </div>

                <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="form-input"
                    disabled={status === 'sending'}
                  />
                  {errors.subject && <span className="error-message-text">{errors.subject}</span>}
                </div>

                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Akash, I would like to discuss..."
                    className="form-input form-textarea"
                    disabled={status === 'sending'}
                  ></textarea>
                  {errors.message && <span className="error-message-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn glow-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span className="spinner-wrapper">
                      <span className="spinner-dot"></span>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

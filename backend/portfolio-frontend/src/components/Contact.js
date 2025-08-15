import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="section fade-in-up">
      <h2 className="section-title">Get In Touch</h2>
      
      {/* Contact Introduction */}
      <div className="card">
        <div className="grid grid-2">
          <div>
            <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Let's Work Together</h3>
            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
              I'm always excited to hear about new projects and opportunities. Whether you have 
              a specific project in mind, want to discuss potential collaboration, or just want 
              to say hello, I'd love to hear from you!
            </p>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              Feel free to reach out through any of the channels below, or use the contact form 
              to send me a detailed message. I typically respond within 24 hours.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💬</div>
            <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>Ready to Connect?</h4>
            <p style={{ color: '#718096' }}>Let's discuss your next project!</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
          Contact Information
        </h3>
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <div className="contact-icon">📧</div>
            <h4>Email</h4>
            <p>your.email@example.com</p>
            <a href="mailto:your.email@example.com" className="contact-link">
              Send Email
            </a>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">💼</div>
            <h4>LinkedIn</h4>
            <p>Connect professionally</p>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">🐙</div>
            <h4>GitHub</h4>
            <p>View my code</p>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">
              Visit GitHub
            </a>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">🌐</div>
            <h4>Portfolio</h4>
            <p>View my work</p>
            <a href="/projects" className="contact-link">
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
          Send Me a Message
        </h3>
        
        {submitStatus === 'success' && (
          <div className="success-message">
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
            <h4>Message Sent Successfully!</h4>
            <p>Thank you for reaching out. I'll get back to you as soon as possible!</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="grid grid-2">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this about?"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or inquiry..."
              rows="6"
            />
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ minWidth: '200px' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* Response Time & Availability */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
          Response Time & Availability
        </h3>
        <div className="grid grid-3">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏰</div>
            <h4>Response Time</h4>
            <p style={{ color: '#4a5568' }}>Within 24 hours</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
            <h4>Time Zone</h4>
            <p style={{ color: '#4a5568' }}>Your Local Time</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💼</div>
            <h4>Availability</h4>
            <p style={{ color: '#4a5568' }}>Open to New Projects</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="card" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white' 
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Ready to Start Your Project?
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
          Let's discuss your ideas and turn them into reality. 
          I'm here to help you create something amazing!
        </p>
        <div className="hero-buttons">
          <a href="/projects" className="btn btn-secondary" style={{ 
            background: 'white', 
            color: '#667eea',
            textDecoration: 'none'
          }}>
            View My Work
          </a>
          <a href="mailto:your.email@example.com" className="btn btn-secondary" style={{ 
            background: 'white', 
            color: '#667eea',
            textDecoration: 'none'
          }}>
            Email Me Directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
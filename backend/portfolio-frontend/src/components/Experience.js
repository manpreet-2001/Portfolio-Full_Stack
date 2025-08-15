import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:4000/api/experiences');
      setExperiences(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch experience data. Please try again later.');
      console.error('Error fetching experiences:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getDuration = (startDate, endDate) => {
    if (!startDate) return '';
    
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();
    
    let duration = '';
    if (years > 0) {
      duration += `${years} year${years > 1 ? 's' : ''}`;
      if (months > 0) duration += ` ${months} month${months > 1 ? 's' : ''}`;
    } else if (months > 0) {
      duration += `${months} month${months > 1 ? 's' : ''}`;
    } else {
      duration = 'Less than a month';
    }
    
    return duration;
  };

  if (loading) {
    return (
      <div className="section">
        <h2 className="section-title">My Experience</h2>
        <div className="loading">Loading experience...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section">
        <h2 className="section-title">My Experience</h2>
        <div className="card">
          <p style={{ color: '#e53e3e', textAlign: 'center' }}>{error}</p>
          <button 
            onClick={fetchExperiences} 
            className="btn btn-primary"
            style={{ display: 'block', margin: '1rem auto' }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section fade-in-up">
      <h2 className="section-title">My Professional Experience</h2>
      
      {experiences.length === 0 ? (
        <div className="card">
          <p style={{ textAlign: 'center', color: '#718096' }}>
            No experience data available at the moment. Please check back later!
          </p>
        </div>
      ) : (
        <>
          {/* Experience Timeline */}
          <div className="timeline">
            {experiences.map((experience, index) => (
              <div key={experience._id} className="timeline-item">
                <div className="card experience-card">
                  <div className="experience-header">
                    <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>
                      {experience.title}
                    </h3>
                    <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
                      {experience.company}
                    </h4>
                    <div className="experience-meta">
                      <span className="experience-date">
                        📅 {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </span>
                      <span className="experience-duration">
                        ⏱️ {getDuration(experience.startDate, experience.endDate)}
                      </span>
                    </div>
                  </div>
                  
                  {experience.description && (
                    <div className="experience-description">
                      <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
                        {experience.description}
                      </p>
                    </div>
                  )}
                  
                  <div className="experience-footer">
                    <small style={{ color: '#a0aec0' }}>
                      Added: {new Date(experience.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="card" style={{ marginTop: '2rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2d3748' }}>
              Experience Overview
            </h3>
            <div className="grid grid-3">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💼</div>
                <h4>Total Positions</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                  {experiences.length}
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏢</div>
                <h4>Companies</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#38a169' }}>
                  {new Set(experiences.map(exp => exp.company)).size}
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📈</div>
                <h4>Career Growth</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d69e2e' }}>
                  {experiences.length > 1 ? 'Progressive' : 'Starting'}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Career Philosophy */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2d3748' }}>
          My Career Philosophy
        </h3>
        <div className="grid grid-2">
          <div>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>🎯 Continuous Growth</h4>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              I believe in constantly challenging myself and expanding my skill set. 
              Every project is an opportunity to learn something new and improve my craft.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>🤝 Collaboration</h4>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              Great results come from working together. I value teamwork, communication, 
              and sharing knowledge with colleagues and the broader tech community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:4000/api/skills');
      setSkills(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch skills. Please try again later.');
      console.error('Error fetching skills:', err);
    } finally {
      setLoading(false);
    }
  };

  const getLevelClass = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return 'level-beginner';
      case 'intermediate':
        return 'level-intermediate';
      case 'expert':
        return 'level-expert';
      default:
        return 'level-intermediate';
    }
  };

  const getLevelIcon = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return '🌱';
      case 'intermediate':
        return '🚀';
      case 'expert':
        return '⭐';
      default:
        return '🚀';
    }
  };

  if (loading) {
    return (
      <div className="section">
        <h2 className="section-title">My Skills</h2>
        <div className="loading">Loading skills...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section">
        <h2 className="section-title">My Skills</h2>
        <div className="card">
          <p style={{ color: '#e53e3e', textAlign: 'center' }}>{error}</p>
          <button 
            onClick={fetchSkills} 
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
      <h2 className="section-title">My Skills & Expertise</h2>
      
      {skills.length === 0 ? (
        <div className="card">
          <p style={{ textAlign: 'center', color: '#718096' }}>
            No skills available at the moment. Please check back later!
          </p>
        </div>
      ) : (
        <>
          {/* Skills Grid */}
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill._id} className="skill-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {getLevelIcon(skill.level)}
                </div>
                <h4>{skill.name}</h4>
                <span className={`skill-level ${getLevelClass(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="card" style={{ marginTop: '2rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2d3748' }}>
              Skills Overview
            </h3>
            <div className="grid grid-3">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                <h4>Total Skills</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                  {skills.length}
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐</div>
                <h4>Expert Level</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e53e3e' }}>
                  {skills.filter(s => s.level?.toLowerCase() === 'expert').length}
                </p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
                <h4>Intermediate</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d69e2e' }}>
                  {skills.filter(s => s.level?.toLowerCase() === 'intermediate').length}
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Additional Skills Info */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2d3748' }}>
          Continuous Learning
        </h3>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
          I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
          My passion for learning drives me to explore new frameworks, tools, and methodologies 
          to deliver the best possible solutions for my clients and projects.
        </p>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <div className="skills-grid" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="skill-card" style={{ background: 'rgba(102, 126, 234, 0.1)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
              <h4>Learning</h4>
              <p>Always exploring new technologies</p>
            </div>
            <div className="skill-card" style={{ background: 'rgba(72, 187, 120, 0.1)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔄</div>
              <h4>Adapting</h4>
              <p>Quick to adapt to new requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 
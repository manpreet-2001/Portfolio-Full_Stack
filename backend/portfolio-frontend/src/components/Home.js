import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/skills');
        setSkills(response.data);
      } catch (err) {
        console.error('Error fetching skills:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  // Get top 4 skills to display
  const topSkills = skills.slice(0, 4);

  return (
    <div className="home fade-in-up">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Manpreet Singh</h1>
        <h2>Full Stack Web Developer & UI/UX Designer</h2>
        <p className="hero-description">
          I create beautiful, functional, and user-friendly web experiences that make a difference.
          Passionate about clean code, modern design, and innovative solutions.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="section">
        <div className="card">
          <div className="grid grid-2">
            <div>
              <h3 className="section-title" style={{ fontSize: '2rem', textAlign: 'left' }}>
                About Me
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568' }}>
                I'm a passionate web developer with expertise in modern web technologies. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Learn More About Me
              </Link>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="profile-placeholder">
                <div className="profile-avatar">
                  <span>👨‍💻</span>
                </div>
                <h4 style={{ marginTop: '1rem', color: '#667eea' }}>Web Developer</h4>
                <p style={{ color: '#718096' }}>Passionate about creating amazing web experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="section">
        <h3 className="section-title">My Skills & Expertise</h3>
        {loading ? (
          <div className="skills-grid">
            <div className="skill-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⏳</div>
              <h4>Loading Skills...</h4>
              <p>Fetching your expertise from database</p>
            </div>
          </div>
        ) : topSkills.length > 0 ? (
          <div className="skills-grid">
            {topSkills.map((skill, index) => (
              <div key={skill._id} className="skill-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {skill.level === 'Expert' ? '⭐' : '🚀'}
                </div>
                <h4>{skill.name}</h4>
                <p style={{ 
                  color: skill.level === 'Expert' ? '#d69e2e' : '#38a169',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
            <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Add Your Skills</h4>
            <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
              Add your technical skills through the admin portal to showcase your expertise here!
            </p>
            <a 
              href="http://localhost:4000/admin/skills" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Add Skills
            </a>
          </div>
        )}
        {topSkills.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/skills" className="btn btn-secondary">
              View All Skills
            </Link>
          </div>
        )}
      </section>

      {/* Featured Projects Preview */}
      <section className="section">
        <h3 className="section-title">Featured Projects</h3>
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
          <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>Start Building Your Portfolio</h4>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Add your projects through the admin portal to showcase your work here!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="http://localhost:4000/admin/projects" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Add Projects
            </a>
            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="card" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Work Together?</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Let's discuss your project and bring your ideas to life!
          </p>
          <Link to="/contact" className="btn btn-secondary" style={{ background: 'white', color: '#667eea' }}>
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
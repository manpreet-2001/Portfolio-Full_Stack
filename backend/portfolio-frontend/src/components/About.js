import React from 'react';

const About = () => {
  return (
    <div className="section fade-in-up">
      <h2 className="section-title">About Me</h2>
      
      {/* Personal Introduction */}
      <div className="card">
        <div className="grid grid-2">
          <div>
                         <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Hello, I'm Manpreet Singh</h3>
            <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
              I'm a passionate Full Stack Web Developer with a love for creating beautiful, 
              functional, and user-friendly web experiences. With a strong foundation in both 
              frontend and backend development, I bring ideas to life through clean code and 
              innovative solutions.
            </p>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              My journey in web development started with curiosity and has evolved into a 
              passion for building applications that make a difference. I believe in writing 
              maintainable code, following best practices, and staying up-to-date with the 
              latest technologies and industry trends.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className="profile-placeholder">
              <div className="profile-avatar" style={{ 
                width: '200px', 
                height: '200px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                fontSize: '4rem',
                color: 'white'
              }}>
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
          What I Do
        </h3>
        <div className="grid grid-3">
          <div className="service-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
            <h4>Frontend Development</h4>
            <p>Creating responsive, interactive user interfaces with modern frameworks like React and Vue.js</p>
          </div>
          <div className="service-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
            <h4>Backend Development</h4>
            <p>Building robust server-side applications and RESTful APIs with Node.js and Express</p>
          </div>
          <div className="service-card">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
            <h4>Full Stack Solutions</h4>
            <p>End-to-end web application development from concept to deployment</p>
          </div>
        </div>
      </div>

      {/* My Story */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
          My Story
        </h3>
        <div className="story-timeline">
          <div className="story-item">
            <div className="story-icon">🎓</div>
            <div className="story-content">
              <h4>Education & Learning</h4>
              <p>
                My journey began with a strong foundation in computer science and web technologies. 
                I've always been fascinated by how websites work and how they can solve real-world problems.
              </p>
            </div>
          </div>
          <div className="story-item">
            <div className="story-icon">💡</div>
            <div className="story-content">
              <h4>First Projects</h4>
              <p>
                I started building simple websites and gradually moved to more complex applications. 
                Each project taught me something new and helped me grow as a developer.
              </p>
            </div>
          </div>
          <div className="story-item">
            <div className="story-icon">🚀</div>
            <div className="story-content">
              <h4>Professional Growth</h4>
              <p>
                Today, I work on diverse projects that challenge me to think creatively and solve 
                complex problems. I'm passionate about sharing knowledge and helping others learn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values & Philosophy */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
          My Values & Philosophy
        </h3>
        <div className="grid grid-2">
          <div className="value-card">
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>🎯 Quality First</h4>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              I believe in delivering high-quality code that is maintainable, scalable, and follows 
              industry best practices. Every line of code matters.
            </p>
          </div>
          <div className="value-card">
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>🤝 User-Centric</h4>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              I always put the user first. Every design decision and feature is made with the 
              end-user experience in mind.
            </p>
          </div>
          <div className="value-card">
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>📚 Continuous Learning</h4>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends, tools, and methodologies.
            </p>
          </div>
          <div className="value-card">
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>💪 Problem Solving</h4>
            <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
              I love tackling complex challenges and finding elegant solutions. Every problem 
              is an opportunity to learn and grow.
            </p>
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
          Ready to Work Together?
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
          I'm always excited to take on new challenges and work with amazing people. 
          Let's create something incredible together!
        </p>
        <a href="/contact" className="btn btn-secondary" style={{ 
          background: 'white', 
          color: '#667eea',
          textDecoration: 'none'
        }}>
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default About; 
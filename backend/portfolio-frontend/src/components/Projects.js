import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4000/api/projects');
        setProjects(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="section">
        <h2 className="section-title">My Projects</h2>
        <div className="loading">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section">
        <h2 className="section-title">My Projects</h2>
        <div className="card">
          <p style={{ color: '#e53e3e', textAlign: 'center' }}>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-primary"
            style={{ display: 'block', margin: '1rem auto' }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile", "Other"];

  // Only show projects from database
  const displayProjects = projects;
  
  const filteredProjects = activeCategory === "All" 
    ? displayProjects 
    : displayProjects.filter(project => project.category === activeCategory);

  return (
    <div className="section fade-in-up">
      <h2 className="section-title">My Projects</h2>
      
      {/* Project Categories */}
      <div className="card">
        <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
          Filter by Category
        </h3>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📁</div>
          <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>No Projects Yet</h3>
          <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
            You haven't added any projects yet. Use the admin portal to add your first project!
          </p>
          <a 
            href="http://localhost:4000/admin/projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Add Your First Project
          </a>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project._id || project.id} className="project-card">
             <div className="project-image">
               <div className="project-placeholder" style={{
                 fontSize: '4rem',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 height: '200px',
                 background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
                 borderRadius: '15px',
                 marginBottom: '1rem'
               }}>
                 {project.image || '📱'}
               </div>
             </div>
             
             <div className="project-content">
               <div className="project-category">
                 <span className="category-badge">{project.category || 'Frontend'}</span>
               </div>
               
               <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>{project.title}</h3>
               
               <p style={{ 
                 lineHeight: '1.6', 
                 color: '#4a5568', 
                 marginBottom: '1.5rem',
                 fontSize: '0.95rem'
               }}>
                 {project.description}
               </p>
               
               <div className="project-tech">
                 {(project.technologies || []).map(tech => (
                   <span key={tech} className="tech-tag">{tech}</span>
                 ))}
               </div>
               
               <div className="project-links">
                 {project.github && (
                   <a 
                     href={project.github} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-secondary"
                     style={{ marginRight: '0.5rem', fontSize: '0.9rem' }}
                   >
                     GitHub
                   </a>
                 )}
                 {project.live && (
                   <a 
                     href={project.live} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="btn btn-primary"
                     style={{ fontSize: '0.9rem' }}
                   >
                     Live Demo
                   </a>
                   )}
               </div>
             </div>
           </div>
        ))}
        </div>
      )}

      {/* Project Statistics */}
      {displayProjects.length > 0 && (
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2d3748' }}>
            Project Overview
          </h3>
          <div className="grid grid-3">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📁</div>
              <h4>Total Projects</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {displayProjects.length}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌐</div>
              <h4>Live Demos</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#38a169' }}>
                {displayProjects.filter(p => p.live).length}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💻</div>
              <h4>Technologies</h4>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d69e2e' }}>
                {new Set(displayProjects.flatMap(p => p.technologies || [])).size}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="card" style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white' 
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Have a Project in Mind?
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
          I'm always excited to work on new and challenging projects. 
          Let's discuss how we can bring your ideas to life!
        </p>
        <a href="/contact" className="btn btn-secondary" style={{ 
          background: 'white', 
          color: '#667eea',
          textDecoration: 'none'
        }}>
          Start a Project
        </a>
      </div>
    </div>
  );
};

export default Projects; 
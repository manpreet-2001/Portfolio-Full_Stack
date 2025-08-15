import React from 'react';

const AdminPortal = () => {
  return (
    <div className="admin-portal fade-in-up">
      <div className="card">
        <h2 className="section-title">Admin Portal</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#4a5568' }}>
          Manage your portfolio data through the backend admin interface.
        </p>
        
        <div className="admin-actions">
          <div className="grid grid-3">
            <div className="admin-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3>Manage Experiences</h3>
              <p>Add, edit, and delete your work experience entries</p>
              <a 
                href="http://localhost:4000/admin/experiences" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Open Experiences Admin
              </a>
            </div>
            
            <div className="admin-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3>Manage Skills</h3>
              <p>Add, edit, and delete your technical skills</p>
              <a 
                href="http://localhost:4000/admin/skills" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Open Skills Admin
              </a>
            </div>
            
            <div className="admin-card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📁</div>
              <h3>Manage Projects</h3>
              <p>Add, edit, and delete your portfolio projects</p>
              <a 
                href="http://localhost:4000/admin/projects" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ marginTop: '1rem' }}
              >
                Open Projects Admin
              </a>
            </div>
          </div>
        </div>
        
        <div className="admin-info">
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2d3748' }}>
            How to Use the Admin Portal
          </h3>
          <div className="grid grid-3">
            <div className="info-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>1️⃣</div>
              <h4>Add Data</h4>
              <p>Click "Add New" to create new entries for your portfolio</p>
            </div>
            <div className="info-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>2️⃣</div>
              <h4>Edit Data</h4>
              <p>Use the Edit button to modify existing entries</p>
            </div>
            <div className="info-card">
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>3️⃣</div>
              <h4>Delete Data</h4>
              <p>Remove entries you no longer need</p>
            </div>
          </div>
        </div>
        
        <div className="admin-note">
          <div className="card" style={{ background: 'rgba(102, 126, 234, 0.1)', border: '2px solid #667eea' }}>
            <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>💡 Pro Tip</h4>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              The admin portal runs on your backend server at <strong>localhost:4000</strong>. 
              Any changes you make here will automatically appear on your portfolio frontend. 
              Make sure your backend server is running for the admin portal to work properly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal; 
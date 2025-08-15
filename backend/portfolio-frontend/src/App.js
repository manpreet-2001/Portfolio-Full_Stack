import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AdminPortal from './components/AdminPortal';

// Navigation Component
const Navigation = ({ isAdmin, toggleAdmin }) => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">Portfolio</span>
          </Link>
        </div>
        
        <div className="nav-toggle" onClick={toggleAdmin}>
          <span className="toggle-text">
            {isAdmin ? '🌐 View Portfolio' : '⚙️ Admin Portal'}
          </span>
        </div>
        
        {!isAdmin ? (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        ) : (
          <div className="admin-nav">
            <span className="admin-badge">Admin Mode</span>
          </div>
        )}
      </div>
    </nav>
  );
};

// Main App Component
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <Router>
      <div className="App">
        <Navigation isAdmin={isAdmin} toggleAdmin={toggleAdmin} />
        
        <main className="main-content">
          {isAdmin ? (
            <AdminPortal />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </main>
        
        {!isAdmin && (
          <footer className="footer">
            <div className="footer-content">
              <p>&copy; 2025 Portfolio. All rights reserved.</p>
              <div className="footer-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:your.email@example.com">Email</a>
              </div>
            </div>
          </footer>
        )}
      </div>
    </Router>
  );
}

export default App;

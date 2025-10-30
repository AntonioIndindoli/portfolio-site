import React from 'react';
import '../LandingPage.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Antonio Indindoli. Built with curiosity and shipped with care.</p>
        <div className="footer-links">
          <a href="mailto:indindoliantonio@gmail.com">Email</a>
          <a href="https://linkedin.com/in/indindoli" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/indindoli" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

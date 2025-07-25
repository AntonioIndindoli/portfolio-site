// In src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Antonio Indindoli. All rights reserved.</p>
        <div className="social-links">
          <a target="_blank" rel="noopener noreferrer">Contact me at indindoliantonio@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

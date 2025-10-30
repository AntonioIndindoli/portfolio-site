import React from 'react';
import '../LandingPage.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contributions', label: 'Contributions' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => (
  <header className="site-header">
    <div className="header-inner">
      <a className="brand" href="#home">
        <span className="brand-text">Antonio Indindoli</span>
      </a>
      <nav className="main-nav" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </nav>
      <a
        className="resume-chip"
        href="/Antonio-Indindoli-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </div>
  </header>
);

export default Header;

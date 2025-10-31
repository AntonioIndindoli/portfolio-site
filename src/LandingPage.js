import React from 'react';
import Header from './components/Header';
import './LandingPage.css';

const skills = [
  {
    title: 'Languages',
    items: ['C#', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: ['React', 'Express.js', 'Node.js'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'MongoDB', 'AWS', 'Google Cloud', 'Unity', 'Visual Studio Code'],
  },
  {
    title: 'Core Skills',
    items: ['Full-stack web development', 'Game development', 'System design'],
  },
];

const projects = [
  {
    title: 'Self-Published Survival Horror Experience',
    highlights: [
      'Released a commercial Steam title, achieving 200+ paid downloads in the first month.',
      'Designed gameplay systems including AI behavior trees, dynamic lighting, and procedural level generation.',
      'Optimized rendering of thousands of models and dynamic lights in a scene to achieve over 60 FPS on typical PCs.',
      'Oversaw all aspects of production — from prototyping to publishing and player feedback integration.',
    ],
    links: [{ label: 'View on Steam', href: 'https://store.steampowered.com/app/2816710/The_Backrooms_Unseen_Tapes/' }],
  },
  {
    title: 'Self-Published Unity Destruction Physics Toolkit',
    highlights: [
      'Developed a modular destruction framework to enable realistic structural collapses and fracturing.',
      'Achieved high performance using optimization techniques like chunking, multithreading, and pooling.',
      'Simplified developer workflows through custom tools for building structures all within the Unity Editor.',
      'Provided comprehensive documentation for easy adoption by other developers.',
    ],
    links: [{ label: 'Asset Store', href: 'https://mayuns.com/#/destructible-structure-builder' }],
  },
  {
    title: 'Full-Stack University Matching Platform',
    highlights: [
      'Led the backend development of a platform that connects student-athletes with universities.',
      'Devised a proprietary sorting algorithm to rank Universities based on data from 5,000+ U.S. Olympians.',
    ],
    links: [{ label: 'Github', href: 'https://github.com/AntonioIndindoli/Aspiro' }],
  },
  {
    title: 'Real-Time Online Poker Platform',
    highlights: [
      'Built a full-stack multiplayer poker game with real-time gameplay via WebSockets.',
      'Implemented synchronized game state, chat, and session management for concurrent users.',
      'Utilized PostgreSQL for scalable data persistence and reliability.',
    ],
    links: [{ label: 'Github', href: 'https://github.com/csc-667-spring-2023-roberts/team-zed-repo' }],
  },
  {
    title: 'Game Development Portfolio Website',
    highlights: [
      'Designed a modern web portfolio showcasing self-published games and development tools.',
      'Focused on clean visual presentation, responsive layout, and accessible design for desktop and mobile.',
      'Built a lightweight, static architecture optimized for performance and low hosting overhead.',
    ],
    links: [{ label: 'Visit Site', href: 'https://mayuns.com' }, { label: 'Github', href: 'https://github.com/AntonioIndindoli/CompanyWebsite_Production' }],
  },
  {
    title: 'Linux Storage Device Driver',
    highlights: [
      'Configured and maintained a custom Linux virtual environment to develop and test a storage driver.',
      'Gained hands-on experience with Linux system configuration and memory management at the OS level.',
    ],
    links: [{ label: 'Github', href: 'https://github.com/AntonioIndindoli/Linux-Storage-Device-Driver' }],
  },
];

const LandingPage = () => {
  return (
    <div className="landing-page" id="home">
      <Header />
      <main>

        {/* Hero */}

        <section className="hero section" id="about" aria-labelledby="about-title">
          <div className="hero-content">
            <div className="about-hero-intro">
              <p className="intro-eyebrow">About Me</p>
              <h1 id="about-title">Antonio Indindoli</h1>
              <p className="hero-subtitle">
                Recent Computer Science graduate from San Francisco State University with hands-on experience shipping
                commercial software, from games to full-stack web platforms.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" >
                <span className="contact-value">indindoliantonio@gmail.com</span>
              </a>
              <a className="contact-card" >
                <span className="contact-value">707-372-3995</span>
              </a>
              <a className="contact-card" href="https://linkedin.com/in/indindoli" target="_blank" rel="noopener noreferrer">
                <span className="contact-value">linkedin.com/in/indindoli</span>
              </a>
              <a className="contact-card" href="https://github.com/AntonioIndindoli" target="_blank" rel="noopener noreferrer">
                <span className="contact-value">github.com/AntonioIndindoli</span>
              </a>
            </div>

          </div>
        </section>

        {/* Contact */}



        {/* Education */}

        <section className="section education" id="education" aria-labelledby="education-title">
          <div className="section-intro">
            <h2 id="education-title">Education</h2>
          </div>
          <div className="education-card">
            <h3>San Francisco State University</h3>
            <p>B.S. in Computer Science — May 2025</p>
          </div>
        </section>

        {/* Skills */}

        <section className="section skills" id="skills" aria-labelledby="skills-title">
          <div className="section-intro">
            <h2 id="skills-title">Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((category) => (
              <article key={category.title} className="skill-card">
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}

        <section className="section projects" id="projects" aria-labelledby="projects-title">
          <div className="section-intro">
            <h2 id="projects-title">Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contributions */}

        <section className="section contributions" id="contributions" aria-labelledby="contributions-title">
          <div className="section-intro">
            <h2 id="contributions-title">GitHub Contributions</h2>
          </div>
          <div className="contribution-chart">
            <img
              src="https://ghchart.rshah.org/39d353/AntonioIndindoli"
              alt="Antonio Indindoli’s GitHub contribution chart"
            />
          </div>
        </section>

      </main>

    </div>
  );
};

export default LandingPage;

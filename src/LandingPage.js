import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './LandingPage.css';
import profilePhoto from './placeholder.png';
import galleryOne from './images/backroomsGameImage.png';
import galleryTwo from './images/Old4.png';
import galleryThree from './images/HomeLogo.png';

const quickFacts = [
  '🎓 B.S. Computer Science, San Francisco State University (May 2025)',
  '🚀 Shipped 2 commercial Unity products',
  '💻 Skilled in C#, JavaScript, React, Unity',
  '📍 Based in San Francisco, CA',
];

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
    items: ['Full-stack web development', 'Game development', 'System design', 'Server setup', 'Optimization'],
  },
];

const projects = [
  {
    title: 'Full-Stack Game Studio Portal & Community Hub',
    period: 'June – Oct 2025',
    tech: 'React.js • MongoDB',
    description:
      'A secure community platform that lets studios launch player forums, manage developer access, and host playable Unity WebGL demos in one place.',
    highlights: [
      'JWT authentication with multi-tier role management for moderators, developers, and players',
      'RESTful API powering customizable profiles, avatar uploads, and image-ready discussion threads',
      'Self-hosted deployment migrated from Google Cloud with hardened firewall and monitoring',
      'Embedded live Unity WebGL demo with streaming asset pipeline',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/indindoli/game-studio-portal' },
      { label: 'Live Demo', href: 'https://portal.indindoli.dev' },
    ],
  },
  {
    title: 'Self-Published Survival Horror Game',
    period: 'Jan 2022 – Jun 2024',
    tech: 'Unity • C#',
    description:
      'An atmospheric survival horror experience released on Steam, featuring dynamic AI systems and procedural level generation.',
    highlights: [
      '200+ sales within the first month and a "Very Positive" community rating',
      'AI director balances tension with adaptive behavior trees and sensory systems',
      'Procedural layout generator assembles multi-storey environments in milliseconds',
      'Deep performance profiling to optimize asset-heavy scenes across mid-tier GPUs',
    ],
    links: [
      { label: 'Steam Page', href: 'https://store.steampowered.com/' },
      { label: 'Trailer', href: 'https://www.youtube.com/' },
    ],
  },
  {
    title: 'Unity Destruction Physics Toolkit',
    period: 'Jan 2024 – Oct 2025',
    tech: 'Unity • C#',
    description:
      'A modular destruction framework for Unity teams that need cinematic collapses without sacrificing runtime performance.',
    highlights: [
      'Configurable chunking pipeline creates reusable fracture profiles for artists',
      'Jobs-friendly multithreading with pooling to keep frame time stable during chaos',
      'Shipped on the Unity Asset Store with full API documentation and tutorial scenes',
      'Integrated telemetry to capture usage analytics for future updates',
    ],
    links: [
      { label: 'Asset Store', href: 'https://assetstore.unity.com/' },
      { label: 'GitHub', href: 'https://github.com/indindoli/destruction-toolkit' },
    ],
  },
  {
    title: 'Full-Stack University Matching Platform',
    period: 'Aug – Dec 2024',
    tech: 'React • Node • SQL • Google Cloud',
    description:
      'A recruitment platform pairing student athletes with universities using proprietary ranking algorithms and interactive mapping.',
    highlights: [
      'Matchmaking engine scored 10k+ athlete/university combinations in under 200ms',
      'Administrators configure program priorities through a secure dashboard',
      'Google Maps overlay provides geo-filtering and travel-time visualization',
      'Continuous integration pipeline deployed to Google Cloud Run with automated backups',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/indindoli/university-matching-platform' },
      { label: 'Demo', href: 'https://matching.indindoli.dev' },
    ],
  },
  {
    title: 'Linux Storage Device Driver',
    period: 'Mar – May 2023',
    tech: 'C • CMake • VirtualBox • Git',
    description:
      'A block storage driver that delivers non-contiguous allocation and custom caching policies for a Linux-based virtual appliance.',
    highlights: [
      'Implemented custom filesystem metadata structures with wear-leveling awareness',
      'Engineered scatter/gather buffers to support high-throughput asynchronous reads',
      'Automated kernel module builds with CMake and GitHub Actions',
      'Documented developer environment provisioning for rapid onboarding',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/indindoli/linux-storage-driver' },
    ],
  },
];

const galleryItems = [
  {
    src: galleryOne,
    alt: 'Unity horror prototype corridor lit in cool neon',
    caption: 'Horror survival prototype showing modular lighting pass',
  },
  {
    src: galleryTwo,
    alt: 'Gameplay capture of destruction physics toolkit demo',
    caption: 'Stress testing destruction toolkit with cascading debris',
  },
  {
    src: galleryThree,
    alt: 'Portal dashboard interface with teal accent cards',
    caption: 'Community hub dashboard concept rendered in Unity UI',
  },
];

const LandingPage = () => {
  return (
    <div className="landing-page" id="home">
      <Header />
      <main>

        {/* Hero */}

        <section className="hero section" aria-labelledby="home-title">
          <div className="hero-content">
            <div className="hero-text">
              <p className="intro-eyebrow">Hi, I&apos;m Antonio</p>
              <h1 id="home-title">
                Computer Science graduate who builds real software used by real players and developers.
              </h1>
              <div className="hero-actions">
                <a className="button primary" href="#projects">View My Projects</a>
                <a
                  className="button outline"
                  href="/Antonio-Indindoli-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="orbital" />
              <div className="hero-photo-frame">
                <img src={profilePhoto} alt="Antonio Indindoli smiling in front of a dark gradient background" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}

        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="section-intro">
            <h2 id="contact-title">Contact</h2>
          </div>
          <div className="contact-grid">
            <a className="contact-card" >
              <span className="contact-label">Email</span>
              <span className="contact-value">indindoliantonio@gmail.com</span>
            </a>
            <a className="contact-card" >
              <span className="contact-label">Phone</span>
              <span className="contact-value">707-372-3995</span>
            </a>
            <a className="contact-card" href="https://linkedin.com/in/indindoli" target="_blank" rel="noopener noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/indindoli</span>
            </a>
            <a className="contact-card" href="https://github.com/AntonioIndindoli" target="_blank" rel="noopener noreferrer">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/AntonioIndindoli</span>
            </a>
          </div>
        </section>

        {/* About */}

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="section-intro">
            <h2 id="about-title">About Me</h2>
            <p>
              I’m a recent Computer Science graduate from San Francisco State University with hands-on experience developing and shipping commercial software, from games to full-stack web platforms.
            </p>
          </div>
          <div className="about-content">
            <ul className="quick-facts" aria-label="Quick facts about Antonio">
              {quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <div className="about-highlight">
              <h3>Why I build</h3>
              <p>
                Whether I’m prototyping destruction physics or fine-tuning REST APIs, I love solving problems that blend storytelling with scalable systems. My happiest moments are when players and developers ship with confidence because the tech just works.
              </p>
              <p>
                I&apos;m currently looking for full-time roles in software development, game development, or IT where I can merge technical rigor with creative collaboration.
              </p>
            </div>
          </div>
        </section>

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
                  <p className="project-meta">{project.period} · {project.tech}</p>
                </div>
                <p className="project-description">{project.description}</p>
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
              src="https://ghchart.rshah.org/00d6ff/AntonioIndindoli"
              alt="Antonio Indindoli&apos;s GitHub contribution chart"
              loading="lazy"
            />
          </div>
        </section>

        {/* Gallery */}

        <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
          <div className="section-intro">
            <h2 id="gallery-title">Unity Highlights</h2>
            <p>Snapshots from gameplay captures and developer tooling I&apos;ve released.</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure key={item.caption} className="gallery-item">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

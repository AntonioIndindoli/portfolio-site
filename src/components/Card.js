import React from 'react';

const Card = ({ imageSrc, caption, link, description }) => {
  const isExternalLink = link.startsWith('http');

  return (
    <div className="card-div">
      <img src={imageSrc} alt={`Image for ${caption}`} className="card-image" />
      <div className="card-content">
        <a
          href={link}
          target={isExternalLink ? '_blank' : undefined}
          rel={isExternalLink ? 'noopener noreferrer' : undefined}
          className="card-caption"
        >
          <button className="nav-button-card">{caption}</button>
        </a>
        {description && <p className="card-description">{description}</p>}
      </div>
    </div>
  );
};

export default Card;

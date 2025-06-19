import React from 'react';
import { useNavigate } from "react-router-dom";

const Card = ({ imageSrc, caption, link, description }) => {
    const navigate = useNavigate();
    const isExternalLink = link.startsWith('http');

    const handleClick = (e) => {
        if (!isExternalLink) {
            e.preventDefault();  // Prevent page reload for internal navigation
            navigate(link);      // Navigate to the internal link
        }
    };

    return (
        <div className="card-div">
            <img src={imageSrc} alt={`Image for ${caption}`} className="card-image" />
            <div className="card-content">
                {isExternalLink ? (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-caption"
                    >
                        <button className="nav-button-card">{caption}</button>
                    </a>
                ) : (
                    <button 
                        className="nav-button-card" 
                        onClick={handleClick}
                    >
                        {caption}
                    </button>
                )}
                {description && <p className="card-description">{description}</p>}
            </div>
        </div>
    );
};

export default Card;

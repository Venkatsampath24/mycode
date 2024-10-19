import React from 'react';
import '../components/css/Star.css'; // Ensure this file contains the necessary styles

const Star = ({ position, size, message, onClick }) => {
    return (
        <div
            className="star"
            style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundImage: `url('/assets/Starsf.png')`, // Ensure the correct path to the star image
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
                position: 'absolute',
            }}
            onClick={onClick}
        >
            <span className="click-me-text">Click Me!</span>
        </div>
    );
};

export default Star;

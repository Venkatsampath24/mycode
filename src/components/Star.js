import React, { useEffect, useState } from 'react';
import '../components/css/Star.css'; // Ensure this file contains the necessary styles

const Star = ({ message, onClick }) => {
    const [position, setPosition] = useState({ top: '0px', left: '0px' });
    const [size, setSize] = useState(24); // Default size is 24px

    useEffect(() => {
        const randomTop = Math.floor(Math.random() * 80) + '%'; // Random vertical position
        const randomLeft = Math.floor(Math.random() * 90) + '%'; // Random horizontal position
        const randomSize = Math.floor(Math.random() * 30) + 20; // Random size between 20px and 50px
        setPosition({ top: randomTop, left: randomLeft });
        setSize(randomSize);
    }, []);

    return (
        <div
            className="star"
            style={{ 
                ...position, 
                width: `${size}px`, 
                height: `${size}px`,
                backgroundImage: `url('/assets/Stars.png')`, // Ensure the correct path
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer'
            }}
            onClick={onClick}
        >
            <span className="click-me-text">Click Me!</span>
        </div>
    );
};

export default Star;

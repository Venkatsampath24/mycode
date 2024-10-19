import React from 'react';
import './css/StarTypingEffect.css';

const starsData = [
    { position: { top: 10, left: 20 }, size: 30, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 15, left: 70 }, size: 40, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 25, left: 30 }, size: 35, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 50, left: 40 }, size: 50, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
    { position: { top: 60, left: 10 }, size: 45, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
    { position: { top: 80, left: 60 }, size: 35, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 20, left: 55 }, size: 30, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 75, left: 80 }, size: 25, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
    { position: { top: 90, left: 20 }, size: 40, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 5, left: 90 }, size: 35, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 35, left: 50 }, size: 30, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 10, left: 30 }, size: 30, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
    { position: { top: 50, left: 70 }, size: 40, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
    { position: { top: 65, left: 15 }, size: 28, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
    { position: { top: 85, left: 45 }, size: 36, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ!" },
    { position: { top: 30, left: 65 }, size: 34, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
    { position: { top: 95, left: 80 }, size: 38, message: "ನೀವು ಮಾತನಾಡದ ಪ್ರತಿ ನಿಮಿಷವೂ ನಾನು ಸಾಯುತ್ತಿದ್ದೇನೆ" },
];

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
            onClick={() => onClick(message)} // Use the onClick prop passed from the parent
        >
            <span className="click-me-text">Click Me!</span>
        </div>
    );
};

const StarTypingEffect = ({ onStarClick }) => {
    return (
        <div className="star-container" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            {starsData.map((star, index) => (
                <Star
                    key={index}
                    position={star.position}
                    size={star.size}
                    message={star.message}
                    onClick={onStarClick} // Pass the onStarClick function
                />
            ))}
        </div>
    );
};

export default StarTypingEffect;

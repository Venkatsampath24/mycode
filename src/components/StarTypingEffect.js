import React from 'react';
import './css/StarTypingEffect.css';

const starsData = [
    { position: { top: 10, left: 20 }, size: 30, message: "ಪ್ರತಿ ರಾತ್ರಿ, ನಿನ್ನಗಾಗಿ ಆಕಾಶದತ್ತ ನೋಡುತ್ತೇನೆ... ✨" },
    { position: { top: 15, left: 70 }, size: 40, message: "ನಿನ್ನ ಬೆಳಕು ನನ್ನತ್ತ ಎಳೆದುಕೊಂಡು ಬರುತ್ತದೆ... 🌟" },
    { position: { top: 25, left: 30 }, size: 35, message: "ನಿಶ್ಶಬ್ಧತೆಯಲ್ಲೂ ನಿನ್ನ ಹೆಸರನ್ನು ಕೇಳುತ್ತೇನೆ... 💫" },
    { position: { top: 50, left: 40 }, size: 50, message: "ಪ್ರತಿ ಹೃದಯ ಬಡಿತವು 'ರೋಜಾ' ಎಂದು ಹಿಮ್ಮೊರೆಯುತ್ತದೆ... ❤️" },
    { position: { top: 60, left: 10 }, size: 45, message: "ನಕ್ಷತ್ರಗಳು ಕಮರಬಹುದು, ಆದರೆ ನನ್ನ ಪ್ರೀತಿ ಶಾಶ್ವತ... 🌌" },
    { position: { top: 80, left: 60 }, size: 35, message: "ನೂರಾರು ಹಾರೈಸುವಿಕೆಗಳಿವೆ ಈ ರಾತ್ರಿ... 🌠" },
    { position: { top: 20, left: 55 }, size: 30, message: "ಆ ಪ್ರತಿಯೊಂದು ಹಾರೈಸುವುದೂ ನೀನೇ... 🌙" },
    { position: { top: 75, left: 80 }, size: 25, message: "ನೀನು ನನ್ನ ಶಾಶ್ವತ ಜ್ಯೋತಿ, ನನ್ನ ತಾರೆ ನಿದ್ದೆಯ ಕನಸು... 🌟" },
    { position: { top: 90, left: 20 }, size: 40, message: "ಹೀಗೆಯೇ ಯಾವತ್ತಿಗೂ ಕಮರವಿಲ್ಲದ ಪ್ರೀತಿ... 💖" },
    { position: { top: 5, left: 90 }, size: 35, message: "ನನ್ನ ಪ್ರೀತಿಯ ಪ್ರತಿ ತಾರೆ ಕೇವಲ ನಿನ್ನದೆ... 🌌" },
    { position: { top: 35, left: 50 }, size: 30, message: "ಹೃದಯದ ತಳದಲ್ಲಿ ನಿನ್ನ ಉಸಿರಾಟದ ಧ್ವನಿಯೇ ಇದೆ... 🎶" },
    { position: { top: 10, left: 30 }, size: 30, message: "ನನ್ನ ಕನಸುಗಳಲ್ಲಿ ಪ್ರತಿದಿನವೂ ನೀನೆ... 🌈" },
    { position: { top: 50, left: 70 }, size: 40, message: "ಈ ಹಾರಾಟದಲ್ಲಿ ನೀನು ನನ್ನ ಪ್ರತಿಯೊಂದು ನಕ್ಷತ್ರ... 🌟" },
    { position: { top: 65, left: 15 }, size: 28, message: "ಈ ಜೀವಿತದಲ್ಲಿ ನೀನೇ ನನ್ನ ತಾರೆ... 🌙" },
    { position: { top: 85, left: 45 }, size: 36, message: "ನೀನು ನನ್ನ ಕನಸು ಮತ್ತು ನನ್ನ ನಕ್ಷತ್ರದ ಬೆಳಕು... ✨" },
    { position: { top: 30, left: 65 }, size: 34, message: "ನಿನ್ನ ಪ್ರೀತಿಯೊಳಗೆ ನಾನು ಶಾಶ್ವತವಾಗಿ ಕಳೆದು ಹೋಗಿದ್ದೇನೆ... 🥰" },
    { position: { top: 95, left: 80 }, size: 38, message: "Roja, you light up my universe, now and forever. 🌹" }
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
                backgroundImage: `url('/assets/myrose.gif')`, // Ensure the correct path to the star image
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
                position: 'absolute',
            }}
            onClick={() => onClick(message)} // Use the onClick prop passed from the parent
        >
            <span className="click-me-text">Check out me!</span>
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

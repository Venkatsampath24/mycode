import React, { useState } from 'react';
import Star from './components/Star'; // Ensure this is the correct path to your Star component
import './App.css';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [audio] = useState(new Audio('/assets/Star.mp3')); // Create an audio instance

    const playAudio = () => {
        audio.loop = true; // Set to loop
        audio.play().catch((error) => {
            console.log("Playback failed:", error);
        });
    };

    const handleStarClick = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
        playAudio(); // Play audio when a star is clicked
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalMessage('');
        audio.pause(); // Pause audio when closing modal
        audio.currentTime = 0; // Reset audio to start
    };

    // Function to generate unique star messages with "Roja" included in some
    const generateStarMessages = () => {
        return [
            "Sometimes the brightest stars go unseen. 🌌",
            "Every glance feels like a fleeting moment in time. ⏳",
            "In a crowded universe, you stand out in silence, Roja. 🌟",
            "Whispers of dreams linger in the night sky. 🌙",
            "Some stories are best told in the silence of the stars. 📖",
            "You light up the night, even if you don't notice, Roja. ✨",
            "Every encounter feels like a hidden treasure, and you, Roja, are my treasure. 🗝️",
            "The beauty of the night sky is in its mysteries. 🌌",
            "Like a secret constellation, you shine in my thoughts, Roja. 🔭",
            "Your presence is like a star—brilliant and distant. 🌠",
            "Some stars are meant to shine quietly from afar. 🌟",
            "Roja, I often wonder about the stories behind the stars. 💭",
            "In a galaxy of dreams, your light is unique, Roja. 🌈",
            "The night sky holds secrets only the heart can feel. 🌙",
            "Some connections remain unspoken yet deeply felt. 🤫",
            "You are a melody that plays softly in my mind, Roja. 🎶",
            "The brightest lights often come from the shadows. 🔆",
            "Some stars seem close, yet they remain far away. 🌌",
            "Mysteries of the universe often lie in quiet moments, Roja. 🌟",
            "In the vastness of space, you linger in my thoughts. 💭",
            "The beauty of the night lies in its uncharted feelings. 🌙",
            "Even the smallest stars can light up the darkest nights, just like you, Roja. 🌌",
            "Your laughter is the echo of distant galaxies, Roja. 🌠",
            "Behind every star lies a story waiting to be told. 📜",
            "Roja, like stars, some people shine brighter in silence. 🔮",
            "Your dreams are constellations in the night sky of my heart, Roja. 🌌",
            "In the theater of the universe, you play the leading role. 🎭",
            "The cosmos hums a tune that only we can hear, and it's your song, Roja. 🎶",
            "Every moment shared is a star added to my sky, and you are many, Roja. ✨",
            "Your essence is a silent song of the night, Roja. 🌙",
            "In the shadows of dreams, you illuminate my path. 💡",
            "Every heartbeat feels like a starburst in my chest. 💖",
            "The universe conspires to keep you in my thoughts, Roja. 🌌",
            "You are the quiet whisper of the night wind, softly calling me. 🍃",
            "The starry night reminds me of your unspoken words. ✨",
            "Roja, in the garden of dreams, you are the rarest bloom. 🌸",
            "Your presence is a fleeting comet in my memory. ☄️",
            "The starry expanse holds secrets that only you can unlock. 🔑",
            "Every star is a wish that I hope will come true for you, Roja. 🌟",
            "Your smile is like a shooting star that brightens my darkest nights, Roja. 🌠",
            "With each twinkle, I am reminded of how precious you are, Roja. 🌌",
            "Your name, Roja, dances among the stars like a waltz in the cosmos. 💃",
            "In a constellation of dreams, you are the brightest star. 🌟",
            "Roja, your laughter is the starlight that fills my heart. 🎇",
            "You are a muse of my silent night poems, Roja. 📜",
            "Every thought of you shines brighter than a supernova. 🌠",
            "You are the sparkle in my universe, Roja. ✨",
            "Like a distant star, you guide my heart through the night. 🌌",
            "Your beauty outshines the stars. 🌟",
            "You are a celestial secret that I long to discover. 🔭",
            "With you, every moment is a new adventure among the stars. 🧭",
            "Roja, your heart is the compass that guides me home. 🏡",
            "In the grand tapestry of the cosmos, you are the brightest thread. 🌌",
            "Your spirit sparkles like the finest diamonds in the night sky, Roja. 💎",
            "Every star holds a piece of my heart, especially for you, Roja. 💖",
            "You are the ethereal glow in the moonlight. 🌙",
            "Roja, you are the symphony of stars that plays in my heart. 🎶",
            "Your essence fills the universe with warmth and love. ❤️",
            "Every star in the sky has a story, and yours is beautiful. 🌌",
            "You are the evening star that brings peace to my soul. 🌙",
            "Roja, your love is a radiant star that lights my path. ❤️",
            "You are the hidden treasure in the cosmos. 🗝️",
            "Your presence is a gentle breeze that caresses my soul. 🍃",
            "In the vast universe, you are my favorite star, Roja. 🌟",
            "You are the light that guides me through the darkness. 🔦",
            "Every twinkle in the sky reminds me of your smile, Roja. 🌠",
            "Your name is written in the stars, forever cherished, Roja. 📜",
        ];
    };

    const stars = generateStarMessages();

    return (
        <div className="App">
            <audio id="background-music" src="/assets/Star.mp3" loop />
            <div className="stars-container">
                {stars.map((star, index) => (
                    <Star key={index} message={star} onClick={() => handleStarClick(star)} />
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>{modalMessage}</p>
                </div>
            )}
        </div>
    );
};

export default App;

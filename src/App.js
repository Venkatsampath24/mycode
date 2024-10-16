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

    // Function to generate unique star messages with "" included in some
    const generateStarMessages = () => {
        return  [
            "Sometimes the brightest stars go unseen, just like how I feel about you. 🌌",
            "Every glance you make feels like a fleeting moment in time that I cherish. ⏳",
            "In a crowded universe, you stand out in silence, , and it captures my heart. 🌟",
            "Whispers of dreams linger in the night sky, reminding me of you. 🌙",
            "Some stories remain untold, just like the feelings I have for you. 📖",
            "You light up the night, even if you don’t notice how much you mean to me, . ✨",
            "Every encounter feels like a hidden treasure that I hope you notice someday. 🗝️",
            "The beauty of the night sky reminds me of the mysteries of you. 🌌",
            "Like a secret constellation, you shine in my thoughts, even from a distance, . 🔭",
            "Your presence is like a star—brilliant and yet always just out of reach. 🌠",
            "Some stars shine quietly from afar, and I admire you from a distance. 🌟",
            ", I often wonder about the stories you hold, even if I don’t know them. 💭",
            "In a galaxy of dreams, I find your light to be uniquely captivating, . 🌈",
            "The night sky holds secrets only my heart can feel when I think of you. 🌙",
            "Some connections remain unspoken, yet they resonate deeply within me. 🤫",
            "You are a melody that plays softly in my mind, echoing long after we've met, . 🎶",
            "The brightest lights often come from the shadows where I quietly admire you. 🔆",
            "Some stars seem close, yet I can only admire you from afar. 🌌",
            "Mysteries of the universe lie in quiet moments, like the ones I cherish thinking of you, . 🌟",
            "In the vastness of space, you linger in my thoughts, like a distant star. 💭",
            "The beauty of the night lies in the uncharted feelings I have for you, which remain hidden. 🌙",
            "Even the smallest stars can light up the darkest nights, just as you brighten my life, . 🌌",
            "Your laughter echoes in my mind, a reminder of the distance between us, . 🌠",
            "Behind every star lies a story waiting to be discovered, and I wish to know yours. 📜",
            ", like stars, some people shine brighter in silence, and you are one of them. 🔮",
            "Your dreams are constellations in my heart, even if you don't know it, . 🌌",
            "In the theater of the universe, I see you playing a role that captivates me. 🎭",
            "The cosmos hums a tune that only I seem to hear, and it's your song, . 🎶",
            "Every moment shared is like a star added to my sky, even if you don't see it, . ✨",
            "Your essence is a silent song of the night that resonates deeply within me, . 🌙",
            "In the shadows of dreams, you illuminate my path, even if you're unaware of it. 💡",
            // "Every heartbeat feels like a starburst in my chest when I think of you. 💖",
            "The universe seems to conspire to keep you in my thoughts, , even from afar. 🌌",
            "You are the quiet whisper of the night wind, a gentle reminder of my feelings. 🍃",
            "The starry night evokes your presence, even if I can't express it to you. ✨",
            ", in the garden of dreams, you are a rare bloom that captivates my heart. 🌸",
            "Your presence lingers in my memory like a fleeting comet, never fully grasped. ☄️",
            "The starry expanse holds secrets that I long to uncover about you, but from a distance. 🔑",
            "Every star is a wish I silently hope will come true for you, . 🌟",
            "Your smile brightens my darkest nights, even if I can’t tell you how I feel. 🌠",
            "With each twinkle, I’m reminded of how precious you are, even if you don’t see me. 🌌",
            "Your name dances among the stars in my heart, even if it's a quiet waltz. 💃",
            "In a constellation of dreams, you remain the brightest star in my thoughts. 🌟",
            ", your laughter fills my heart, but it’s a melody only I hear. 🎇",
            "You are the muse of my silent thoughts, inspiring me from afar, . 📜",
            "Every thought of you shines brighter than anything else in my mind. 🌠",
            "You are the sparkle in my universe, even if you don’t know it, . ✨",
            "Like a distant star, you guide my heart, though I can never reach you. 🌌",
            "Your beauty is a light that outshines everything around me, even from afar. 🌟",
            "You are a celestial secret I wish to understand better, but it remains hidden. 🔭",
            "With you, every moment feels like an adventure I can only dream about. 🧭",
            ", your heart seems to be the compass guiding me through uncharted waters. 🏡",
            "In the grand tapestry of the cosmos, you are a thread I can’t quite grasp. 🌌",
            "Your spirit sparkles like diamonds, but I admire you quietly, . 💎",
            "Every star holds a piece of my heart, especially for you, though you might not realize it. 💖",
            "You are the ethereal glow in my thoughts that brings comfort in the night. 🌙",
            ", you are a symphony of stars that plays softly in my heart, heard only by me. 🎶",
            "Your essence fills my thoughts with warmth, even if you’re far away. ❤️",
            "Every star in the sky tells a story, and yours captivates my imagination, . 🌌",
            "You are the evening star that brings me peace, even from a distance. 🌙",
            ", your love is a radiant light that illuminates my path, but it’s a path I walk alone. ❤️",
            "You are the hidden treasure I cherish, even if I can’t claim it. 🗝️",
            "Your presence is a gentle breeze that softly brushes my soul, even if you don’t see me. 🍃",
            "In this vast universe, you are my favorite star, even if you don’t know it, . 🌟",
            "You are the light guiding me through my darkest thoughts, but it’s a light I can’t reach. 🔦",
            "Every twinkle in the sky is a reminder of your smile, which stays with me. 🌠",
            "Your name is written in my heart, forever cherished, even if it remains unspoken. 📜",
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

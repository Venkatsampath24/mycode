import React, { useState } from 'react';
import StarTypingEffect from './components/StarTypingEffect'; // Adjust the path if needed
import Modal from './components/Modal'; // Import your Modal component
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

    return (
        <div className="App">
            <StarTypingEffect onStarClick={handleStarClick} />
            {isModalOpen && (
                <Modal message={modalMessage} onClose={closeModal} />
            )}
        </div>
    );
};

export default App;

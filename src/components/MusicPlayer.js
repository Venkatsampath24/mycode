import React, { useEffect, useRef } from 'react';

const MusicPlayer = ({ playMusic }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/assets/Star.mp3');

        const handleAudioPlay = async () => {
            try {
                if (playMusic) {
                    await audioRef.current.play();
                } else {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0; // Reset audio to start
                }
            } catch (error) {
                console.error("Error playing audio:", error);
            }
        };

        handleAudioPlay();

        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Reset audio to start
        };
    }, [playMusic]);

    return null;
};

export default MusicPlayer;

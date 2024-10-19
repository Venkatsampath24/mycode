import React from 'react';
import './css/Modal.css'; // Add your own styles here

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Message</h2>
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;

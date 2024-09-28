import React from 'react';
import '../components/css/Modal.css';

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal">
            <span className="close" onClick={onClose}>&times;</span>
            <p>{message}</p>
        </div>
    );
};

export default Modal;

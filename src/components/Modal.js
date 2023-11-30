import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "../styles/Modal.css";

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close-button-container">
          <FontAwesomeIcon
            className="modal-close-btn"
            onClick={onClose}
            icon={faX}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

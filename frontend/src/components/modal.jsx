import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ showModal, onClose, children }) => {
  if (!showModal) return null;

  return createPortal(
    <div id="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} >
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

// WhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/651223324"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;

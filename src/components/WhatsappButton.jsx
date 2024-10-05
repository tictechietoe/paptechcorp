import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-elevation-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
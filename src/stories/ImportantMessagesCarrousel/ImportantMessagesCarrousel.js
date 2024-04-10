import React, { useState } from 'react';
import "./ImportantMessagesCarousel.css"; // Estilo para o componente

const ImportantMessagesCarousel = ({ messages }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const goToPreviousMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex === 0 ? messages.length - 1 : prevIndex - 1));
  };

  const goToNextMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex === messages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-arrow" onClick={goToPreviousMessage}>{'<'}</div>
      <div className="message">{messages[currentMessageIndex]}</div>
      <div className="carousel-arrow" onClick={goToNextMessage}>{'>'}</div>
    </div>
  );
};

export default ImportantMessagesCarousel;

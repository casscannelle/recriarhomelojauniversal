import React, { useState } from "react";
import "./TopCarousel.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function TopCarousel() {
  const messages = [
    { id: 0, value: 'Parcelamento em até 12x sem juros. Aproveite!' },
    { id: 1, value: 'Inscreva-se na newsletter e ganhe 10% de desconto na sua primeira compra' },
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex === 0 ? messages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex === messages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="main">
        <ChevronLeftIcon onClick={handlePrev} />
        <h1>{messages[currentMessageIndex].value}</h1>
        <ChevronRightIcon onClick={handleNext} />
    </div>
  );
}

export default TopCarousel;

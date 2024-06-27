'use client';

import { useState } from 'react';

export default function App() {
  const images = [
    'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (currentIndex > images.length - 1) {
    console.log(currentIndex);
    setCurrentIndex(0);
  }

  return (
    <div className="image-container">
      <ul className="images">
        {images.slice(currentIndex, currentIndex + 1).map((items) => (
          <img className="displayed_images" src={items}></img>
        ))}
      </ul>
      <div className="button">
        <button className="left-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="right-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

import React from 'react'
import {useState, useEffect } from "react";
import img1 from '../Images/1.png';
import img2 from '../Images/2.png';
import img3 from '../Images/3.png';

function ImageSlider() {
    const images = [
        img1,
        img2,
        img3
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(interval);
      }, [images.length]);

  return (
    <div>
       {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`img-slider ${currentIndex === index ? "active" : ""}`}
        />
      ))}
    </div>
  )
}

export default ImageSlider
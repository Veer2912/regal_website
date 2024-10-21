import React, { useState, useEffect } from 'react';

import img2 from '../static/img/CALL.png';
import img3 from '../static/img/img3.jpg';
import img4 from '../static/img/img4.jpeg'
import img5 from '../static/img/img5.jpg'
import iso  from '../static/img/iso.png'

const Hero: React.FC = () => {
  const images = [img4, img2, img3, img5, iso];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex items-center justify-center h-screen  text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out brightness-75 contrast-125
          ${index === currentIndex
                ? 'opacity-100 translate-x-0' // Current slide fades in and slides into view
                : index < currentIndex
                  ? 'opacity-100 -translate-x-0' // Previous slide fades out to the left
                  : 'opacity-100 translate-x-full' // Next slide fades out to the right
              }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
            }}
          />
        ))}
      </div>
    


     
  <div className="relative z-10 p-6 align-text-top">
    <h1 className="text-7xl font-bold text-white font-sans text-center "></h1>

  </div>
      
    </div >
  );
};

export default Hero;

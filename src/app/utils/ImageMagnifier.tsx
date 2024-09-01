"use client";
import React, { useState, useEffect } from 'react';
import { ImageMagnifierProps } from '../Hooks/DashBoard/Hooks';

// Agrandar imagen
const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ src, alt = "Image" }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setIsZoomed(prevState => !prevState);
  };

  return (
    <>
      <div
        style={{
          cursor: 'pointer',
          position: 'relative',
          display:"flex"
        }}
        onClick={handleClick}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '150px',
            height: '150px',
            display: 'block',
            zIndex: 0,
          }}
        />
      </div>

      {isZoomed && (
        <>
          <div
            onClick={handleClick}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'zoom-out',
              zIndex: 1000,
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: isSmallScreen ? '300px' : '500px',
                height: isSmallScreen ? '300px' : '500px',
              }}
            />
          </div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              zIndex: 999,
            }}
            onClick={handleClick}
          />
        </>
      )}
    </>
  );
};

export default ImageMagnifier;

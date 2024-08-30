"use client";
import React, { useState } from 'react';
import { ImageMagnifierProps } from '../Hooks/DashBoard/Hooks';


//agrandar imagen
const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ src, alt = "Image" }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(prevState => !prevState);
  };
  return (
    <>
      <div
        style={{
          cursor: 'pointer',
          position: 'relative',
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
          }}
        />
      </div>

      {isZoomed && (
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
              width: '500px',    
              height: '500px',  
     
            }}
          />
        </div>
      )}
    </>
  );
};

export default ImageMagnifier;

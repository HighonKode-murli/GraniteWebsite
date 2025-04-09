import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GraniteDetail.css";

const GraniteDetail = ({ granite }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!granite) return <div className="loading">Loading...</div>;

  return (

    <div className="granite-detail-page">
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <Link to="/products">Granite</Link> &gt; <span>{granite.name}</span>
      </div>

      <div className="granite-detail-container">
        <div className="granite-image-gallery">
          <div className="main-image-container">
            {granite.multiImages && granite.multiImages.length > 0 ? (
              <img
                src={granite.multiImages[currentImageIndex]}
                alt={`${granite.name} view ${currentImageIndex + 1}`}
              />
            ) : (
              <img 
                src={granite.image} 
                alt={granite.name} 
              />
            )}
          </div>

          <div className="thumbnail-gallery">
            {granite.multiImages && granite.multiImages.map((image, index) => (
              <div 
                key={index} 
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              >
                <img src={image} alt={`${granite.name} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="granite-info">
          <h1>{granite.name} Granite</h1>
          
          <div className="granite-description">
            <p>{granite.onSelectDescription}</p>
          </div>
          
          
          <div className="granite-cta">
            <Link to="/contact" className="contact-button">Request Quote</Link>
          </div>
          
          <div className="category">
            <span>Category: </span>
            <Link to="/products">Granite</Link>
          </div>
        </div>
    </div>
    </div>
  );
};

export default GraniteDetail; 
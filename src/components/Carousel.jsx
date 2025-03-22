import { useState, useEffect } from "react";
import "./Carousel.css";
import graniteImg1 from "/assets/granite_img1.jpeg";
import graniteImg2 from "/assets/granite_img2.jpeg";
import graniteImg3 from "/assets/granite_img3.jpeg";
import graniteImg4 from "/assets/granite_img4.jpeg";
import graniteImg5 from "/assets/granite_img5.jpeg";
import graniteImg6 from "/assets/granite_img6.jpeg";
import graniteImg7 from "/assets/granite_img7.jpeg";
import { Link } from "react-router-dom";

const images = [graniteImg1, graniteImg2, graniteImg3, graniteImg4, graniteImg5, graniteImg6, graniteImg7];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="project-section">
      <div className="project-container">
        <div className="project-image-container">
          <div
            className="carousel-slide"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index + 1}`} />
            ))}
          </div>
        </div>
        
        <div className="project-info">
          <h3>Premium Quality Granite</h3>
          
          <p>
            Premium quality granite slabs expertly crafted for both residential and commercial applications. 
            Our granite combines timeless elegance with unmatched durability, making it the perfect choice 
            for modern interior design.
          </p>
          
          <Link to="/products">
            <button className="view-portfolio-btn">View Photos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
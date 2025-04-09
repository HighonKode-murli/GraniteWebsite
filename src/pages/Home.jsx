import Carousel from "../components/Carousel";
import { useEffect, useRef } from "react";
import "./Home.css";
import ImagesGridDisplay from "../components/ImagesGridDisplay";

const Home = () => {
  const graniteImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!graniteImageRef.current) return;

      const rect = graniteImageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPosition = (windowHeight - rect.top) / windowHeight;
        const rotateX = (scrollPosition - 0.5) * 0.5; // Max 10 degrees rotation
        const rotateY = (scrollPosition - 0.5) * 0.5;
        const translateZ = scrollPosition * 70; // Max 50px translation

        graniteImageRef.current.style.transform = 
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className="home-bg-image">
        
            
          </div>
         
      
      <div className="granite-3d-container">
        <img 
          ref={graniteImageRef}
          src="/assets/3d_granite.png"
          alt="3D Granite Visualization" 
          className="granite-3d-image"
        />
      </div>
      <ImagesGridDisplay/>
    </div>
  );
};

export default Home;

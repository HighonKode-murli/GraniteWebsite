import Carousel from "../components/Carousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-bg-image">
        <div className="home-main-text">
          <div className="main-text">
           <span id="main-text-1"> TIMELESS </span> <span className="highlight">BEAUTY,</span> <span id="main-text-2">UNMATCHED{' '}</span> 
            <span className="highlight">QUALITY</span>  
            </div>
          <span className="home-subtext">
            High-quality granite tiles for modern and traditional
            designs.
          </span>
        </div>
      </div>
      <div>
        <Carousel/>
      </div>
    </div>
  );
};
export default Home;

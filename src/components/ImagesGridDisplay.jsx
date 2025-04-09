import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./ImagesGridDisplay.css";

const products = [
    {
        id: 1,
        title: "COFFEE BROWN",
        image: "/assets/granite_images/coffee_brown.jpg",
        link: "/granite/coffee-brown",
        
    },
    {  
        id: 2,
        title: "SILVER BLACK",
        image: "/assets/granite_images/silver_black.jpg",
        link: "/granite/silver-black",
        
    },
    {
        id: 3,
        title: "SAFIARI BROWN",
        image: "/assets/granite_images/safari_brown.jpg",
        link: "/granite/safari-brown",
        
    },
    {
        id: 4,
        title: "TAN BROWN",
        image: "/assets/granite_images/tan_brown.jpg",
        link: "/granite/tan-brown",
        
    },
    {
        id: 5,
        title: "HONEY BROWN",
        image: "/assets/granite_images/honey_brown.jpg",
        link: "/granite/honey-brown",
       
    }
];

const ImagesGridDisplay = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <div className="images-grid-display">
            <div className="section-header">
                <h2>Our Product Range</h2>
                <Link to="/products">See All Products</Link>
            </div>
            
            <div className="grid-container">
                <div className="carousel-arrow prev" onClick={scrollLeft}>←</div>
                <div className="carousel-arrow next" onClick={scrollRight}>→</div>
                
                <div className="grid-layout" ref={scrollRef}>
                    {products.map((product) => (
                        <Link 
                            to={product.link} 
                            key={product.id} 
                            className="grid-item"
                        >
                            
                            <img src={product.image} alt={product.title} />
                            <div className="image-overlay">
                                <span>{product.title}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default ImagesGridDisplay;

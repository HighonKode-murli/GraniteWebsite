import { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import graniteImg1 from "../assets/granite_img1.jpeg";
import graniteImg2 from "../assets/granite_img2.jpeg";
import graniteImg3 from "../assets/granite_img3.jpeg";
import graniteImg4 from "../assets/granite_img4.jpeg";
import graniteImg5 from "../assets/granite_img5.jpeg";
import graniteImg6 from "../assets/granite_img6.jpeg";
import graniteImg7 from "../assets/granite_img7.jpeg";

const Products = () => {
  // Product data with names and images
  const graniteProducts = [
    { id: 1, name: "Black Galaxy", image: graniteImg1, description: "Elegant black granite with gold flecks" },
    { id: 2, name: "Silver Pearl", image: graniteImg2, description: "Sophisticated light gray with silver speckles" },
    { id: 3, name: "Royal Brown", image: graniteImg3, description: "Rich brown with subtle patterns" },
    { id: 4, name: "Blue Pearl", image: graniteImg4, description: "Stunning blue-gray with pearl-like iridescence" },
    { id: 5, name: "Emerald Green", image: graniteImg5, description: "Vibrant green with natural veining" },
    { id: 6, name: "Golden Cream", image: graniteImg6, description: "Warm cream color with golden highlights" },
    { id: 7, name: "Ruby Red", image: graniteImg7, description: "Deep red with natural crystal formations" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="products-container">
      <div className="products-hero">
        <h1>Our Premium Granite Collection</h1>
        <p>Discover the perfect stone for your project from our exquisite selection of high-quality granites</p>
      </div>

      <div className="products-grid">
        {graniteProducts.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => openProductModal(product)}
          >
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="product-modal-overlay" onClick={closeProductModal}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProductModal}>×</button>
            <div className="modal-image-container">
              <img  id="modal-image" src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="modal-product-info">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              
              <Link to="/contact" className="inquire-button">Request Quote</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
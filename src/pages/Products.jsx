import { useNavigate } from "react-router-dom";
import "./Products.css";

export const graniteImages = [
  {
    id: 1,
    name: "Coffee Brown",
    image: "/assets/granite_images/coffee_brown.jpg",
    multiImages: [
      "/assets/multi_Images/coffee brown/1.jpg",
      "/assets/multi_Images/coffee brown/2.jpg",
      "/assets/multi_Images/coffee brown/3.jpg"
    ],
    description: "Elegant black granite with gold flecks",
    onSelectDescription: "Coffee Brown Granite, as the name suggests, captivates with its deep brown hue, reminiscent of a freshly brewed cup of coffee. This granite variant infuses spaces with warmth and richness, making it ideal for countertops, flooring, or feature walls. Its resilience, combined with its inviting color palette, makes Coffee Brown Granite a favorite among homeowners and designers. At RBM Granites, our curated collection of Coffee Brown Granite promises a blend of comfort, luxury, and durability."
  },
  {
    id: 2,
    name: "Silver Black",
    image: "/assets/granite_images/silver_black.jpg",
    multiImages: [
      "/assets/multi_Images/silver black/1.jpg",
      "/assets/multi_Images/silver black/2.jpg",
      
    ],
    description: "Elegant black granite with gold flecks",
    onSelectDescription: "A premium natural stone featuring a deep black background with striking silver and gray veins, often interspersed with white speckles. This granite is quarried primarily in India and is known for its polished, glossy finish that enhances its luxurious appearance. It is highly durable, scratch-resistant, and heat-resistant, making it ideal for kitchen countertops, flooring, wall cladding, and outdoor applications."
  },
  {
    id: 3,
    name: "Tan Brown",
    image: "/assets/granite_images/tan_brown.jpg",
    multiImages: [
      "/assets/multi_Images/tan brown/1.jpg",
      "/assets/multi_Images/tan brown/2.jpg",
      "/assets/multi_Images/tan brown/3.jpg",
      "/assets/multi_Images/tan brown/4.jpg",
      "/assets/multi_Images/tan brown/5.jpg"
    ],
    description: "Elegant black granite with gold flecks",
    onSelectDescription: "A premium natural stone known for its rich dark brown base, accented with striking black and reddish-brown mineral patterns. It offers exceptional durability, scratch resistance, and low maintenance. With its polished finish that enhances its warm, earthy tones, Tan Brown Granite is an ideal choice for kitchen countertops, flooring, wall cladding, and other interior and exterior applications. Elevate your spaces with the timeless elegance and reliable quality of RBM Granites."
  },
  {
    id: 4,
    name: "Honey Brown",
    image: "/assets/granite_images/honey_brown.jpg",
    multiImages: [
      "/assets/multi_Images/honey brown/1.jpg",
      "/assets/multi_Images/honey brown/2.jpg",
      
    ],
    description: "Elegant black granite with gold flecks",
    onSelectDescription: "It is a luxurious natural stone characterized by its warm golden-brown base, highlighted with intricate black, gray, and cream speckles. It boasts excellent durability, resistance to scratches, and low maintenance. Its polished finish enhances its rich, earthy tones, making it a perfect choice for kitchen countertops, flooring, wall cladding, and outdoor spaces. Add timeless elegance and lasting strength to your projects with the superior quality of RBM Granites."
  },

  {
    id: 5,
    name: "Safari Brown",
    image: "/assets/granite_images/safari_brown.jpg",
    multiImages: [
      "/assets/multi_Images/safari brown/1.jpg",
      "/assets/multi_Images/safari brown/2.jpg",
    ],
    description: "Elegant black granite with gold flecks",
    onSelectDescription: "A durable and elegant natural stone featuring a warm brown base with intricate patterns of black, gray, and cream-colored speckles. It has a polished or honed finish that enhances its earthy tones and natural texture. Its strength, scratch resistance, and low maintenance make it an excellent choice for kitchen countertops, flooring, wall cladding, and outdoor installations. Safari Brown Granite adds a rich and inviting aesthetic, making it suitable for both residential and commercial spaces."
  }
]

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="products-container">
      <div className="products-hero">
        <h1>Our Premium Granite Collection</h1>
        <p>Discover the perfect stone for your project from our exquisite selection of high-quality granites</p>
      </div>

      <div className="products-grid">
        {graniteImages.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => navigate(`/granite/${product.name.toLowerCase().replace(/\s+/g, '-')}`)}
          >
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
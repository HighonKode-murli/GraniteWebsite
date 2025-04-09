import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GraniteDetail from "../components/GraniteDetail";
import { graniteImages } from "./Products";

const GraniteDetailPage = () => {
  const { graniteId } = useParams();
  const [granite, setGranite] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the granite by id or slug
    const foundGranite = graniteImages.find(
      g => g.id.toString() === graniteId || 
           g.name.toLowerCase().replace(/\s+/g, '-') === graniteId.toLowerCase()
    );
    
    if (foundGranite) {
      setGranite(foundGranite);
      document.title = `${foundGranite.name} Granite - RBM Granites`;
    } else {
      // Redirect to products page if granite not found
      navigate('/products');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [graniteId, navigate]);

  return (
    <GraniteDetail granite={granite} />
  );
};

export default GraniteDetailPage; 
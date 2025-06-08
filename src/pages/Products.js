import React, {useEffect} from "react";
import "../styles/Products.css";
import spoon1 from "../assets/spoon1.png"; // Add product images
import spoon2 from "../assets/spoon2.png";
import spoon3 from "../assets/spoon3.png";

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  const products = [
    {
      id: 1,
      name: "Classic Wooden Spoon",
      image: spoon1,
      description: "100% biodegradable and made from Sri Lankan wood.",
    },
    {
      id: 2,
      name: "Eco-Friendly Spoon Set",
      image: spoon2,
      description: "A durable, smooth-finish wooden spoons.",
    },
    {
      id: 3,
      name: "Premium Wooden Cutlery",
      image: spoon3,
      description: "High-quality wooden spoon for sustainable dining.",
    },
  ];

  return (
    <div className="products-container" style={{ cursor: 'default' }}>
      <h1>Our Wooden Spoons</h1>
      <p>Explore our eco-friendly, Sri Lankan-manufactured wooden cutlery.</p>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
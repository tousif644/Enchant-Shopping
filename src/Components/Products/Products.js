import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Products.css";

// Products
const Products = (props) => {
  const { handleAddToCart, products } = props;
  const { name, price, seller, image } = props.products;
  return (
    <div className="products-container">
      {/* Content */}
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Price : {price}$</p>

      {/* Handle Add To Cart */}
      <button onClick={() => handleAddToCart(products)}>
        Add To Cart
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="icon"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Products;

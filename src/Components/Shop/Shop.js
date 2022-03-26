import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import Questions from "../Questions";
import "./Shop.css";
const Shop = () => {
  // Using State
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Using Effect
  useEffect(() => {
    fetch("Product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Cart
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  // Remove Cart
  const handleRemoveCart = () => {
    const newCart = [];
    document.getElementById("choosen-item").innerHTML = "";
    setCart(newCart);
  };

  // Choose 1
  const chooseOne = () => {
    const newValue = Math.floor(Math.random() * cart.length);
    if (newValue > 0 <= 1) {
      const showValue = cart[newValue].name;
      document.getElementById("choosen-item").innerHTML = showValue;
    }
  };

  // Returing Value
  return (
    <div>
      <div className="shop-container">
        {/* Product Container */}
        <div className="product-container">
          {products.map((product) => (
            <Products
              key={product.id}
              products={product}
              handleAddToCart={handleAddToCart}
            ></Products>
          ))}
        </div>

        {/* Order Container */}
        <div className="order-container">
          <div>
            <h3>Order Summary</h3>
            <h3>Total Added: {cart.length}</h3>
            {cart.map((cartItem) => (
              <Cart name={cartItem.name} img={cartItem.image}></Cart>
            ))}

            {/* Buttons */}
            <button onClick={() => handleRemoveCart(products)}>
              Remove Cart
            </button>
            <br />
            <button onClick={() => chooseOne()}>Choose 1 for me</button>
            {/* Choose Item */}
            <h3 id="choosen-item"></h3>
          </div>
          <br />
        </div>
      </div>

      {/* Questions And Answer */}
      <div>
        <div className="questions">
          <Questions></Questions>
        </div>
      </div>
    </div>
  );
};

export default Shop;

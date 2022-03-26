import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
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
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Products
            key={product.id}
            products={product}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="order-container">
        <h3>Order Summary</h3>
        <h3>Total Added: {cart.length}</h3>
        {cart.map((c) => (
          <Cart key={c.id} name={c.name} img={c.image}></Cart>
        ))}
        <button onClick={() => handleRemoveCart(products)}>Remove Cart</button>
        
        <button>Choose 1 For me</button>
      </div>
    </div>
  );
};

export default Shop;

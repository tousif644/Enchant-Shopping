import React from "react";
import "./Cart.css";
const Cart = (props) => {
  return (
    <div className="cart-container">
        <div>
        <img src={props.img} alt="" width={30} />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Cart;

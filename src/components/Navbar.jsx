import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ setShowCart }) {

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="navbar">

      <div className="logo-section">
        <h2>Paradise Nursery</h2>
        <p>Where Green Meets Serenity</p>
      </div>

      <h1>Plants</h1>

      <div
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        🛒 {totalItems}
      </div>

    </div>
  );
}

export default Navbar;
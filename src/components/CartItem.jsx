import React from 'react';

import Navbar from './Navbar';

import { useSelector, useDispatch } from 'react-redux';

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../redux/CartSlice';

function CartItem({ setShowCart }) {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <Navbar setShowCart={setShowCart} />

      <div className="cart-container">

        <h2>Total Cart Amount: ${totalAmount}</h2>

        {cartItems.map((item) => (

          <div className="cart-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div>

              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>
                Total Price:
                ${item.price * item.quantity}
              </p>

              <div className="quantity-buttons">

                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>

              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  dispatch(removeItem(item.id))
                }
              >
                Delete
              </button>

            </div>

          </div>
        ))}

        <button
          className="checkout-btn"
          onClick={() => alert('Coming Soon')}
        >
          Checkout
        </button>

        <button
          className="continue-btn"
          onClick={() => setShowCart(false)}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default CartItem;
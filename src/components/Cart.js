import React from "react";

const Cart = ({ cart, removeFromCart, totalPrice, placeOrder }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Cart;

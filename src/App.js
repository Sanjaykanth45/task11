import React, { useState } from "react";
import products from "./components/products";
import WelcomeScreen from "./components/WelcomeScreen";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const placeOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      {showWelcome ? (
        <WelcomeScreen onStart={() => setShowWelcome(false)} />
      ) : (
        <>
          <ProductList products={products} addToCart={addToCart} />
          <Cart cart={cart} removeFromCart={removeFromCart} totalPrice={totalPrice} placeOrder={placeOrder} />
        </>
      )}
    </div>
  );
};

export default App;

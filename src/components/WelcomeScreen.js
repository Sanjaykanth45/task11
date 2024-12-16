import React from "react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome to the Shopping Cart App!</h1>
      <button onClick={onStart}>Start Shopping</button>
    </div>
  );
};

export default WelcomeScreen;

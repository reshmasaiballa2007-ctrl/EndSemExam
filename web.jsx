import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Welcome to My Shopping Store!</h2>;
}

function Products() {
  const [cart, setCart] = useState([]);

  const items = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Laptop", price: 45000 },
    { id: 3, name: "Keyboard", price: 1000 },
    { id: 4, name: "Smart Watch", price: 2500 }
  ];

  return (
    <div>
      <h2>Available Products</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name} - ₹{item.price}</h3>
          <button onClick={() => setCart([...cart, item])}>
            Add to Cart
          </button>
        </div>
      ))}
      <h3>Cart Items: {cart.length}</h3>
      <h3>Total: ₹{cart.reduce((s, p) => s + p.price, 0)}</h3>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>My E-Commerce Store</h1>
      <Link to="/">Home</Link> {" | "}
      <Link to="/products">Products</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
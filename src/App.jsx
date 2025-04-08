import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage'; // Ganti dari MenuList ke MenuPage
import Navbar from './Components/Navbar';
import CartSlider from './Components/Cart/CartSlider';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Hitung total item
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Fungsi tambah ke keranjang
  const addToCart = (product, quantity, note) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity, note }]);
    }
  };

  const [cartOpen, setCartOpen] = useState(false);


  // Fungsi hapus dari keranjang
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  

  return (
    <Router>
      <ToastContainer />
      <Navbar
        totalItems={totalItems}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        onCartClick={() => setCartOpen(true)} // buka slider
      />
      <CartSlider
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/MenuList"
          element={
            <MenuPage
              addToCart={addToCart}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

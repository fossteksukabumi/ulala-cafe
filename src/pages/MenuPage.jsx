import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MenuList from "../Components/Menu/MenuList";

const MenuPage = ({ addToCart, cartItems }) => {
  return (
    <div>
      <MenuList addToCart={addToCart} cartItems={cartItems} />
      <Footer />
    </div>
  );
};

export default MenuPage;

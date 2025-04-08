import React from "react";
import "../Styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ totalItems, onCartClick }) {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="/">Cafe-Ulala</a>
        </div>
        <div className="menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/MenuList">Daftar Menu</a></li>
            <li>
              <div className="cart-icon-container" onClick={onCartClick}>
                <FaShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="cart-count">{totalItems}</span>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

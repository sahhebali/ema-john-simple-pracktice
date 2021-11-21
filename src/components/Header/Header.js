import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className="header-container">
            <img className="logo" src={logo} alt="logo" />
            <nav className="nav">
                <a href="Shop">Shop</a>
                <a href="Order Review">Order Review</a>
                <a href="Manege Inventory"> Manege Inventory-here
                </a>
            </nav>
        </div>

    );
};

export default Header;
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://t3.ftcdn.net/jpg/00/70/24/16/240_F_70241606_7JEYKPDXev0LccmW7aHkz8v4JzZ3YnOW.jpg" alt="" />
            </div>
            <div className='links'>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/link">link</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;
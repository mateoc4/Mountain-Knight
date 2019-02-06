import React from 'react';
import logo from './logo.png';
import './Menu.css';

const Menu = () => {
    return (
        <nav>
            <div className='menu '><p>ABOUT</p></div>
            <div className='menu'><p>OFFER</p></div>
            <img src={logo} alt="Logo" height='60px' width='60px'/>
            <div className='menu'><p>GALLERY</p></div>
            <div className='menu'><p>CONTACT</p></div>

          </nav>
    );
};

export default Menu 

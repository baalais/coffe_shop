import React, { useState } from 'react';
import css from '../style/Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../style/Hamburger.css';

function Navbar() {
    // Use state to manage the visibility of the hamburger menu
    const [isHamburgerVisible, setHamburgerVisible] = useState(false);
  
    // Function to toggle the visibility of the hamburger menu
    function toggleHamburger() {
      setHamburgerVisible(!isHamburgerVisible);
    }
  
    // Function to handle button clicks inside the hamburger menu
    function handleHamburgerButtonClick() {
      setHamburgerVisible(false);
    }

  return (
    <>
      <div className={css.header}>
        <div className={`${css.navBar} ${isHamburgerVisible ? css.hide : ''}`}>
          <a href='#home' className={css.navbarItem}>
            <h2 className={css.navbarText}>Home</h2>
          </a>
          <a href='#about' className={css.navbarItem}>
                <h2 className={css.navbarText}>About</h2>
          </a>
          <a href='#menu' className={css.navbarItem}>
                <h2 className={css.navbarText}>Menu</h2>
          </a>
          <a href='#blog' className={css.navbarItem}>
                <h2 className={css.navbarText}>Blog</h2>
          </a>
          <a href='#shop' className={css.navbarItem}>
                <h2 className={css.navbarText}>Shop</h2>
          </a>
          <a href='#contact' className={css.navbarItem}>
                <h2 className={css.navbarText}>Contact</h2>
          </a>
        </div>
        <span onClick={toggleHamburger} id='hamburgerIcon' className='material-symbols-outlined'>
          menu
        </span>
        <div id='hamburger' className={`${css.hamburger} ${isHamburgerVisible ? '' : css.hide}`}>
          <a href='#home' id='navItem' className={css.navbarItem} onClick={handleHamburgerButtonClick}>
            <h2 className={css.navbarText}>Home</h2>
          </a>
          <a href='#about' id='navItem' className={css.navbarItem}>
                <h2 className={css.navbarText}>About</h2>
        </a>
        <a href='#menu' id='navItem' className={css.navbarItem}>
                <h2 className={css.navbarText}>Menu</h2>
        </a>
        <a href='#blog' id='navItem' className={css.navbarItem}>
                <h2 className={css.navbarText}>Blog</h2>
        </a>
        <a href='#shop' id='navItem' className={css.navbarItem}>
                <h2 className={css.navbarText}>Shop</h2>
        </a>
        <a href='#contact' id='navItem' className={css.navbarItem}>
                <h2 className={css.navbarText}>Contact</h2>
        </a>
        </div>
        <div className={css.logoBar}>
          <Link to='/' className={css.logoItem}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

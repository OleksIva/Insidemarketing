import React, { useState } from 'react';
import './Header.scss';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img
        className="header__logo"
        src="https://finanzvergleich.com/wp-content/uploads/2023/05/Fin-new-logo.png.png"
        alt="Logo"
      />
      <button className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`} onClick={toggleMenu}>
        <span className="header__menu-icon"></span>
      </button>
      <ul className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}>
        <li className="header__menu-item">Finanzen</li>
        <li className="header__menu-item">Banken</li>
        <li className="header__menu-item">Haushalt</li>
        <li className="header__menu-item">Wissen</li>
      </ul>
    </header>
  );
}

export default Header;

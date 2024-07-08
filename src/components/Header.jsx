import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <div className="logo">
          <h1>Bikcraft</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#bicycles">Bicicletas</a></li>
          <li><a href="#insurance">Seguros</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchTerm);
  };

  return (
    <nav className="navbar">
      <div className="logo">Mi Tienda React</div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/carrito">Carrito</a></li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default Navbar;

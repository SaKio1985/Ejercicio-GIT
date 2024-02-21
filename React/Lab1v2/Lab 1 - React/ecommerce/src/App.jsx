import React, { useState } from 'react';
import Header from "./components/Header/Header";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import Footer from ".components/Footer/Footer";
import Banner from ".components/Banner/Banner";
import LoginForm from "./components/LoginForm/LoginForm";
import CartSection from ".components/CartSection/CartSection";
import Navbar from './components/HeaderNavBar/navbar';
import ProductCard from './components/ProductCard/ProductCard';
import data from './data.json'; 

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value
    setSearchTerm(newSearchTerm);
    filterProducts(newSearchTerm);
  };

  const filterProducts = (newSearchTerm) => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Navbar onSearchSubmit={filterProducts} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;

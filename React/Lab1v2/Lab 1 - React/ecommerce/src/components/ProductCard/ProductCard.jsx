import React from 'react';
import './ProductCard.css';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  const { addtoCart } = useCart{};

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <p className="product-category">{category}</p>
        <div className="product-rating">
          <p>Rating: {rating.rate} ({rating.count} reviews)</p>
        </div>
        <button
          className="product-add-to-cart"
          onClick={() => addtoCart(product)}
          >
            Agregar al carrito
          </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        rate: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }

export default ProductCard;

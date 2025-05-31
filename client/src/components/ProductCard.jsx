import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, name, description, price, imageUrl, brand, rating, sizes }) => {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();
  
  const isInCart = cartItems.some(item => item.id === id);

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Use the smallest size as default when adding from product card
    const defaultSize = sizes ? sizes[0].size : '50ml';
    addToCart({ id, name, description, price, images: [imageUrl], brand, rating, sizes }, defaultSize);
  };

  const handleGoToCart = (e) => {
    e.stopPropagation();
    navigate('/cart');
  };

  return (
    <motion.div
      onClick={handleCardClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-gradient-dark rounded-lg overflow-hidden shadow-[0_0_15px_rgba(255,20,147,0.1)] hover:shadow-[0_0_20px_rgba(255,20,147,0.2)] transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full pt-[100%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-luxury-black/80" />
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-luxury-gold/20 backdrop-blur-sm text-luxury-gold font-accent text-sm rounded-full border border-luxury-gold/30">
            {brand}
          </span>
        </div>
      </div>

      <div className="p-5 bg-gradient-dark">
        <div className="transform transition-transform duration-300 group-hover:translate-x-2">
          <h3 className="font-primary text-xl text-luxury-gold mb-2">{name}</h3>
          <p className="font-secondary text-sm text-gray-300 line-clamp-2 h-10 group-hover:text-white/90 transition-colors">
            {description}
          </p>

          <div className="mt-3">
            {rating && (
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`${
                      index < rating ? 'text-luxury-gold' : 'text-gray-600'
                    } w-4 h-4`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-400">({rating})</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xl font-semibold text-luxury-gold font-primary">
              ${price.toFixed(2)}
            </p>
            <button
              onClick={isInCart ? handleGoToCart : handleAddToCart}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                isInCart
                  ? 'bg-secondary text-white hover:bg-secondary-dark'
                  : 'bg-luxury-gold text-luxury-black hover:bg-luxury-gold/90'
              }`}
            >
              {isInCart ? 'Go to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 
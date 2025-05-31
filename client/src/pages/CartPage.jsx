import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (item, change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      updateQuantity(item.id, item.size, newQuantity);
    }
  };

  const handleCheckout = () => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    if (!token || !user) {
      // Save current cart state if needed
      localStorage.setItem('redirectAfterLogin', '/checkout');
      navigate('/login');
      return;
    }

    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <h2 className="text-3xl font-accent text-luxury-gold mb-4">Your Cart is Empty</h2>
            <p className="text-gray-300 mb-8">Discover our collection of luxury fragrances.</p>
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-3 bg-gradient-to-r from-luxury-gold to-primary-light text-black rounded-full font-semibold hover:shadow-[0_0_25px_rgba(184,134,11,0.3)] transition-all duration-300"
            >
              Continue Shopping
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20 shadow-[0_0_15px_rgba(184,134,11,0.1)]"
        >
          <h1 className="text-3xl font-accent text-luxury-gold mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={`${item.id}-${item.size}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-black/30 border border-luxury-gold/20"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md border border-luxury-gold/20"
                  />
                  <div className="flex-1">
                    <h3 className="font-accent text-luxury-gold">{item.name}</h3>
                    <p className="text-gray-300 text-sm">{item.brand}</p>
                    <p className="text-gray-400 text-sm">Size: {item.size}</p>
                    <p className="text-luxury-gold">
                      ${(item.sizes.find(s => s.size === item.size)?.price || 0) * item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item, -1)}
                      className="p-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 hover:bg-luxury-gold/20 text-luxury-gold transition-colors"
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="text-gray-300 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item, 1)}
                      className="p-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 hover:bg-luxury-gold/20 text-luxury-gold transition-colors"
                    >
                      <FaPlus size={12} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="p-2 rounded-full bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-500 transition-colors ml-2"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-lg bg-black/30 border border-luxury-gold/20">
                <h2 className="text-xl font-accent text-luxury-gold mb-4">Order Summary</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-luxury-gold/20 pt-2 mt-2">
                    <div className="flex justify-between text-luxury-gold font-semibold">
                      <span>Total</span>
                      <span>${getCartTotal()}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className={`w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isCheckingOut
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-luxury-gold to-primary-light text-black hover:shadow-[0_0_25px_rgba(184,134,11,0.3)]'
                  }`}
                >
                  {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage; 
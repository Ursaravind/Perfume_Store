import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { api } from '../config/api';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // For now, simulate a successful order since backend is not ready
      setTimeout(() => {
        clearCart();
        navigate('/checkout-success');
      }, 1500);

    } catch (err) {
      setError('An error occurred while processing your order. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20 shadow-[0_0_15px_rgba(184,134,11,0.1)]"
        >
          <h1 className="text-3xl font-accent text-luxury-gold mb-8">Checkout</h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
              <p className="text-red-500">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="border-t border-luxury-gold/20 pt-6 mt-8">
                  <h2 className="text-xl font-accent text-luxury-gold mb-6">Payment Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          required
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">CVC</label>
                        <input
                          type="text"
                          name="cardCVC"
                          value={formData.cardCVC}
                          onChange={handleChange}
                          required
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 rounded-lg bg-black/30 border border-luxury-gold/20">
                <h2 className="text-xl font-accent text-luxury-gold mb-4">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex justify-between text-gray-300">
                      <span>{item.name} ({item.size}) x{item.quantity}</span>
                      <span>${(item.sizes.find(s => s.size === item.size)?.price || 0) * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-luxury-gold/20 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>${getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-luxury-gold font-semibold text-lg pt-2">
                    <span>Total</span>
                    <span>${getCartTotal()}</span>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className={`w-full mt-6 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    loading
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-luxury-gold to-primary-light text-black hover:shadow-[0_0_25px_rgba(184,134,11,0.3)]'
                  }`}
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage; 
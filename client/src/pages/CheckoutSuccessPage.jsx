import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const CheckoutSuccessPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="mb-8">
            <FaCheckCircle className="w-20 h-20 text-luxury-gold mx-auto" />
          </div>
          
          <h1 className="text-4xl font-accent text-luxury-gold mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Thank you for your purchase. We'll send you an email confirmation with your order details and tracking information.
          </p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-luxury-gold to-primary-light text-black rounded-full font-semibold hover:shadow-[0_0_25px_rgba(184,134,11,0.3)] transition-all duration-300"
            >
              Return to Home
            </Link>
            
            <div>
              <Link
                to="/shop"
                className="inline-block text-luxury-gold hover:text-primary-light transition-colors mt-4"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage; 
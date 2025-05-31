import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-black border-t border-luxury-gold/20">
      {/* Newsletter Section */}
      <div className="border-b border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-accent text-luxury-gold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Stay updated with our latest collections, exclusive offers, and fragrance tips.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-luxury-gold to-primary-light text-black rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(184,134,11,0.2)] transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-accent text-luxury-gold mb-4">About Us</h4>
            <p className="text-gray-400 mb-4">
              Discover the world's finest luxury fragrances at our premium perfume store. 
              We curate exceptional scents that tell unique stories.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <FaPinterest className="text-xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-luxury-gold transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-accent text-luxury-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-accent text-luxury-gold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-400 hover:text-luxury-gold transition-colors">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-accent text-luxury-gold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <p className="font-medium">Address:</p>
                <p>123 Luxury Avenue</p>
                <p>New York, NY 10001</p>
              </li>
              <li>
                <p className="font-medium">Phone:</p>
                <p>+1 (555) 123-4567</p>
              </li>
              <li>
                <p className="font-medium">Email:</p>
                <p>info@luxuryperfume.com</p>
              </li>
              <li>
                <p className="font-medium">Hours:</p>
                <p>Mon - Fri: 9AM - 8PM</p>
                <p>Sat - Sun: 10AM - 6PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-luxury-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Luxury Perfume Store. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-luxury-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-luxury-gold text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-luxury-gold text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
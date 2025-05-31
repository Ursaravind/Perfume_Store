import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative overflow-hidden min-h-[80vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1592842232655-e5d345cbc2d0?q=80&w=2070"
          alt="Luxury Perfume Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Multiple Overlay Layers for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/10 via-black/90 to-black/95"></div>
        
        {/* Gold Particle Effect */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(184,134,11,0.15) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Luxury Glow Effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-luxury-gold/10 blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-luxury-gold/5 blur-[150px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-luxury-gold/20"
          >
            <h1 className="font-accent text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-primary-light to-luxury-gold">
                Signature Scent
              </span>
            </h1>
            <p className="font-secondary text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Explore our curated collection of luxury fragrances, where each scent tells a unique story of elegance and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/shop" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-gradient-to-r from-luxury-gold to-primary-light text-black rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(184,134,11,0.3)] transition-all duration-300"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link to="/collection" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-3 bg-transparent border-2 border-luxury-gold text-luxury-gold rounded-full font-semibold hover:bg-luxury-gold/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(184,134,11,0.2)]"
                >
                  View Collection
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: "Luxury Brands", icon: "✨", desc: "World's finest perfumes" },
              { title: "Free Shipping", icon: "🚚", desc: "On orders over $100" },
              { title: "Gift Wrapping", icon: "🎁", desc: "Complimentary service" },
              { title: "Expert Guide", icon: "👩‍🔬", desc: "Personal fragrance consultation" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="backdrop-blur-sm bg-black/30 rounded-2xl p-6 text-white hover:bg-black/40 transition-all duration-300 border border-luxury-gold/20"
              >
                <span className="text-3xl mb-3 block">{feature.icon}</span>
                <h3 className="font-accent text-luxury-gold font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "500+", label: "Fragrances" },
            { value: "50+", label: "Luxury Brands" },
            { value: "100K+", label: "Happy Customers" },
            { value: "4.9/5", label: "Customer Rating" }
          ].map((stat, index) => (
            <div key={stat.label} className="backdrop-blur-sm bg-black/30 rounded-xl p-4 border border-luxury-gold/20">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-3xl sm:text-4xl font-bold mb-2 font-accent bg-gradient-to-r from-luxury-gold to-primary-light bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
    </div>
  );
};

export default Banner; 
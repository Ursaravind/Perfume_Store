import React from 'react';
import { motion } from 'framer-motion';
import { FaGem, FaHistory, FaCrown, FaLeaf } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: <FaGem />,
      title: 'Luxury Selection',
      description: 'Curated collection of the world s most prestigious fragrances and rare perfumes.'
    },
    {
      icon: <FaHistory />,
      title: 'Heritage',
      description: 'Over two decades of expertise in luxury perfumery and exceptional customer service.'
    },
    {
      icon: <FaCrown />,
      title: 'Exclusivity',
      description: 'Access to limited editions and exclusive releases from renowned perfume houses.'
    },
    {
      icon: <FaLeaf />,
      title: 'Authenticity',
      description: '100% authentic products sourced directly from original manufacturers.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-accent text-luxury-gold mb-6">Our Story</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Welcome to LUXE Scents, where luxury meets artistry in the world of fine fragrances. 
            Our passion for perfumery drives us to curate the most exquisite collection of scents 
            from around the globe.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300"
            >
              <div className="text-3xl text-luxury-gold mb-4">{feature.icon}</div>
              <h3 className="text-xl font-accent text-luxury-gold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20"
          >
            <h2 className="text-2xl font-accent text-luxury-gold mb-4">Our Philosophy</h2>
            <p className="text-gray-300 mb-4">
              At LUXE Scents, we believe that a fragrance is more than just a scent – it's an 
              expression of individuality, a trigger for memories, and a statement of sophistication.
            </p>
            <p className="text-gray-300">
              Our commitment to excellence extends beyond our product selection to the personalized 
              service we provide to each client, ensuring they find their perfect signature scent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20"
          >
            <h2 className="text-2xl font-accent text-luxury-gold mb-4">Our Promise</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-luxury-gold mr-2">✦</span>
                <span>Authenticity guaranteed for all our products</span>
              </li>
              <li className="flex items-start">
                <span className="text-luxury-gold mr-2">✦</span>
                <span>Expert guidance from our fragrance specialists</span>
              </li>
              <li className="flex items-start">
                <span className="text-luxury-gold mr-2">✦</span>
                <span>Secure and elegant packaging for all orders</span>
              </li>
              <li className="flex items-start">
                <span className="text-luxury-gold mr-2">✦</span>
                <span>Discreet and efficient worldwide shipping</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20 mb-16"
        >
          <h2 className="text-2xl font-accent text-luxury-gold mb-4">Experience Luxury</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Visit our boutique or explore our online collection to discover your perfect fragrance. 
            Our experts are always ready to guide you through your olfactory journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 
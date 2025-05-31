import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const collections = [
  {
    id: 'floral',
    name: 'Floral Elegance',
    description: 'Discover the enchanting world of floral fragrances, from delicate rose to exotic jasmine.',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000',
    products: ['J\'adore', 'Light Blue', 'Mon Paris'],
    gradient: 'from-pink-900/50 to-black/50'
  },
  {
    id: 'oriental',
    name: 'Oriental Mystique',
    description: 'Immerse yourself in the mysterious allure of oriental fragrances with rich, spicy notes.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000',
    products: ['Black Orchid', 'Black Opium', 'Good Girl'],
    gradient: 'from-amber-900/50 to-black/50'
  },
  {
    id: 'fresh',
    name: 'Fresh & Citrus',
    description: 'Experience the invigorating blend of citrus and aquatic notes that awaken the senses.',
    image: 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?q=80&w=1000',
    products: ['Light Blue', 'Neroli Portofino'],
    gradient: 'from-cyan-900/50 to-black/50'
  },
  {
    id: 'woody',
    name: 'Woody & Leather',
    description: 'Bold and sophisticated fragrances featuring rich woods, leather, and earthy notes.',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000',
    products: ['Santal 33', 'Ombré Leather'],
    gradient: 'from-brown-900/50 to-black/50'
  }
];

const featured = {
  name: 'Luxury Icons',
  description: 'Timeless fragrances that define elegance and sophistication.',
  products: [
    {
      name: 'Chanel N°5',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000',
      description: 'The iconic fragrance that revolutionized the world of perfumery.'
    },
    {
      name: 'Black Orchid',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000',
      description: 'A luxurious and sensual masterpiece by Tom Ford.'
    },
    {
      name: 'J\'adore',
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000',
      description: 'The epitome of modern feminine luxury.'
    }
  ]
};

const CollectionPage = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);

  const heroImage = 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg';
  const fallbackImage = 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg';

  useEffect(() => {
    // Preload hero image
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setHeroImageLoaded(true);
    img.onerror = () => setHeroImageError(true);
  }, []);

  useEffect(() => {
    console.log('CollectionPage mounted');
    return () => console.log('CollectionPage unmounted');
  }, []);

  try {
    return (
      <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-16">
          <div className="absolute inset-0 overflow-hidden">
            {!heroImageLoaded && !heroImageError && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <motion.img
              src={heroImageError ? fallbackImage : heroImage}
              alt="Luxury Perfumes"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                heroImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: heroImageLoaded ? 1 : 0 }}
              onLoad={() => setHeroImageLoaded(true)}
              onError={() => setHeroImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-accent text-luxury-gold mb-6"
            >
              Curated Collections
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl"
            >
              Explore our carefully curated collections of the world's most prestigious fragrances,
              each telling its own unique story of luxury and sophistication.
            </motion.p>
          </div>
        </div>

        {/* Featured Collection */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-accent text-luxury-gold mb-4">{featured.name}</h2>
            <p className="text-gray-300">{featured.description}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-accent text-luxury-gold mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <Link
                    to={`/shop`}
                    className="inline-flex items-center text-luxury-gold hover:text-primary-light transition-colors"
                  >
                    Discover More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Collection Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient}`}></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-accent text-luxury-gold mb-4">{collection.name}</h3>
                  <p className="text-gray-300 mb-6">{collection.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {collection.products.map(product => (
                      <span
                        key={product}
                        className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-luxury-gold/20"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/shop`}
                    className="inline-flex items-center text-luxury-gold hover:text-primary-light transition-colors"
                  >
                    Explore Collection <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-luxury-gold/20"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-accent text-luxury-gold mb-4">
                Join Our Exclusive Circle
              </h2>
              <p className="text-gray-300 mb-8">
                Subscribe to receive early access to new collections, exclusive offers, and expert fragrance insights.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-luxury-gold to-primary-light text-black font-semibold hover:shadow-[0_0_25px_rgba(184,134,11,0.3)] transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering CollectionPage:', error);
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-accent text-luxury-gold mb-4">Something went wrong</h1>
          <p className="text-gray-300">We're working on fixing this issue.</p>
        </div>
      </div>
    );
  }
};

export default CollectionPage; 
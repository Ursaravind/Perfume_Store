import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaStar, FaTimes } from 'react-icons/fa';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
    
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filters, setFilters] = useState({
    brands: [],
    categories: [],
    priceRange: [0, 1000],
    rating: 0,
  });

  const [sortBy, setSortBy] = useState('featured');
  const [loading, setLoading] = useState(false);

  // Extract unique brands and categories
  const allBrands = [...new Set(products.map(product => product.brand))];
  const allCategories = [...new Set(products.map(product => product.category))];

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleBrandToggle = (brand) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  const handleCategoryToggle = (category) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const resetFilters = () => {
    setFilters({
      brands: [],
      categories: [],
      priceRange: [0, 1000],
      rating: 0,
    });
    setSearchQuery('');
  };

  // Apply filters and search
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      let filtered = [...products];

      // Apply search filter
      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Apply brand filter
      if (filters.brands.length > 0) {
        filtered = filtered.filter(product => filters.brands.includes(product.brand));
      }

      // Apply category filter
      if (filters.categories.length > 0) {
        filtered = filtered.filter(product => filters.categories.includes(product.category));
      }

      // Apply price range filter
      filtered = filtered.filter(product => {
        const productPrice = product.sizes[0].price; // Using smallest size price
        return productPrice >= filters.priceRange[0] && productPrice <= filters.priceRange[1];
      });

      // Apply rating filter
      if (filters.rating > 0) {
        filtered = filtered.filter(product => Math.floor(product.rating) >= filters.rating);
      }

      // Apply sorting
      switch (sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.sizes[0].price - b.sizes[0].price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.sizes[0].price - a.sizes[0].price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        default:
          // 'featured' - no sorting needed
          break;
      }

      setFilteredProducts(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, filters, sortBy]);

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-accent text-luxury-gold mb-6">
            Luxury Fragrances
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Discover our curated collection of exclusive perfumes from the world's most prestigious houses.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fragrances..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 rounded-full border-2 border-luxury-gold/20 text-luxury-gold hover:bg-luxury-gold/10 transition-all flex items-center gap-2"
            >
              <FaFilter />
              Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-3 rounded-full bg-black/50 border border-luxury-gold/20 text-gray-300 focus:border-luxury-gold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-luxury-gold/20"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-accent text-luxury-gold">Filters</h3>
                  <button
                    onClick={resetFilters}
                    className="text-gray-400 hover:text-luxury-gold transition-colors text-sm"
                  >
                    Reset All
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Brands */}
                  <div>
                    <h4 className="text-gray-300 mb-2">Brands</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {allBrands.map(brand => (
                        <label key={brand} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={filters.brands.includes(brand)}
                            onChange={() => handleBrandToggle(brand)}
                            className="form-checkbox text-luxury-gold rounded border-luxury-gold/20 bg-black/50"
                          />
                          <span className="text-gray-300">{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div>
                    <h4 className="text-gray-300 mb-2">Categories</h4>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                        <label key={category} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={filters.categories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                            className="form-checkbox text-luxury-gold rounded border-luxury-gold/20 bg-black/50"
                          />
                          <span className="text-gray-300">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range and Rating */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-gray-300 mb-2">Price Range</h4>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="0"
                          max="1000"
                          value={filters.priceRange[1]}
                          onChange={(e) => handleFilterChange('priceRange', [0, parseInt(e.target.value)])}
                          className="w-full"
                        />
                        <span className="text-gray-300">
                          Up to ${filters.priceRange[1]}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-gray-300 mb-2">Minimum Rating</h4>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            onClick={() => handleFilterChange('rating', rating)}
                            className={`text-2xl ${
                              rating <= filters.rating
                                ? 'text-luxury-gold'
                                : 'text-gray-600'
                            }`}
                          >
                            <FaStar />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          <AnimatePresence>
            {loading ? (
              // Loading skeletons
              [...Array(8)].map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-black/40 rounded-2xl p-4 border border-luxury-gold/20"
                >
                  <div className="aspect-square rounded-lg bg-gray-800 animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-800 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-2/3 animate-pulse"></div>
                </motion.div>
              ))
            ) : (
              // Actual products
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group"
                >
                  <Link to={`/product/${product.id}`}>
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300">
                      <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 right-2 bg-luxury-gold text-black text-xs px-2 py-1 rounded-full">
                            New
                          </div>
                        )}
                      </div>
                      <h3 className="font-accent text-luxury-gold mb-1">{product.name}</h3>
                      <p className="text-gray-400 text-sm mb-2">{product.brand}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-1">
                          <FaStar className="text-luxury-gold" />
                          <span className="text-gray-300">{product.rating}</span>
                        </div>
                        <span className="text-luxury-gold">
                          From ${product.sizes[0].price}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {!loading && filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-2xl font-accent text-luxury-gold mb-4">No Products Found</h3>
            <p className="text-gray-300">
              Try adjusting your filters or search criteria to find what you're looking for.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-3 bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold rounded-full hover:bg-luxury-gold/20 transition-all"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ShopPage; 
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaRegStar, FaFacebookF, FaTwitter, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some(item => item.id === parseInt(id) && item.size === selectedSize);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (!foundProduct) {
      navigate('/');
      return;
    }
    setProduct(foundProduct);
    setReviews(foundProduct.reviews || []);
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-2xl text-luxury-gold">Loading...</div>
      </div>
    );
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out ${product.name} by ${product.brand}!`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`,
      whatsapp: `https://api.whatsapp.com/send?text=${text} ${url}`
    };

    window.open(shareUrls[platform], '_blank');
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    
    if (!user) {
      navigate('/login');
      return;
    }

    if (newReview.rating === 0) {
      alert('Please select a rating');
      return;
    }

    if (!newReview.comment.trim()) {
      alert('Please write a review comment');
      return;
    }

    // Create new review object
    const review = {
      id: Date.now(),
      user: user.name || "Anonymous User",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    // Update reviews state
    setReviews(prevReviews => [review, ...prevReviews]);

    // Update product's average rating
    const newRating = (product.rating * product.reviews.length + review.rating) / (product.reviews.length + 1);
    setProduct(prev => ({
      ...prev,
      rating: parseFloat(newRating.toFixed(1)),
      reviews: [review, ...prev.reviews]
    }));

    // Clear the form
    setNewReview({ rating: 0, comment: '' });

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    successMessage.textContent = 'Review submitted successfully!';
    document.body.appendChild(successMessage);
    setTimeout(() => successMessage.remove(), 3000);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-black py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(184,134,11,0.03) 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }}
        ></div>
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-luxury-gold/5 blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-luxury-gold/5 blur-[150px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20 shadow-[0_0_15px_rgba(184,134,11,0.1)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-square rounded-lg overflow-hidden border border-luxury-gold/20"
              >
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleImageChange(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      currentImageIndex === index 
                        ? 'border-luxury-gold' 
                        : 'border-luxury-gold/20 hover:border-luxury-gold/50'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-accent text-3xl text-luxury-gold">{product.name}</h1>
                <p className="text-lg text-gray-300 mt-1">{product.brand}</p>
              </div>

              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-xl">
                    {index < Math.floor(product.rating) ? (
                      <FaStar className="text-luxury-gold" />
                    ) : (
                      <FaRegStar className="text-gray-600" />
                    )}
                  </span>
                ))}
                <span className="text-gray-400">({product.rating})</span>
              </div>

              <p className="text-gray-300">{product.description}</p>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-3">Select Size</h3>
                <div className="grid grid-cols-3 gap-4">
                  {product.sizes.map((sizeOption) => (
                    <button
                      key={sizeOption.size}
                      onClick={() => handleSizeChange(sizeOption.size)}
                      className={`px-4 py-2 rounded-full border-2 transition-all ${
                        selectedSize === sizeOption.size
                          ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold'
                          : 'border-luxury-gold/20 text-gray-300 hover:border-luxury-gold/50'
                      }`}
                    >
                      {sizeOption.size} - ${sizeOption.price}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={isInCart ? handleGoToCart : handleAddToCart}
                  className={`flex-1 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    isInCart
                      ? 'bg-secondary hover:bg-secondary-dark text-white'
                      : 'bg-gradient-to-r from-luxury-gold to-primary-light text-black hover:shadow-[0_0_25px_rgba(184,134,11,0.3)]'
                  }`}
                >
                  {isInCart ? 'Go to Cart' : 'Add to Cart'}
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="p-3 rounded-full border-2 border-luxury-gold/20 hover:border-luxury-gold/50 text-luxury-gold transition-all"
                  >
                    <MdShare className="text-xl" />
                  </button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl border border-luxury-gold/20">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-luxury-gold/10 hover:text-luxury-gold flex items-center space-x-2"
                      >
                        <FaFacebookF />
                        <span>Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-luxury-gold/10 hover:text-luxury-gold flex items-center space-x-2"
                      >
                        <FaTwitter />
                        <span>Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare('pinterest')}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-luxury-gold/10 hover:text-luxury-gold flex items-center space-x-2"
                      >
                        <FaPinterest />
                        <span>Pinterest</span>
                      </button>
                      <button
                        onClick={() => handleShare('whatsapp')}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:bg-luxury-gold/10 hover:text-luxury-gold flex items-center space-x-2"
                      >
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-accent text-luxury-gold mb-6">Customer Reviews</h2>
            
            {/* Add Review Form */}
            <form onSubmit={handleAddReview} className="mb-8 p-6 rounded-lg bg-black/30 border border-luxury-gold/20">
              <h3 className="text-lg font-accent text-luxury-gold mb-4">
                {user ? 'Write a Review' : 'Sign in to Write a Review'}
              </h3>
              {!user && (
                <p className="text-gray-400 mb-4">
                  Please{' '}
                  <Link to="/login" className="text-luxury-gold hover:text-primary-light">
                    sign in
                  </Link>
                  {' '}to share your review.
                </p>
              )}
              <div className="mb-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => user && setNewReview({ ...newReview, rating: star })}
                      className={`text-2xl focus:outline-none transition-transform hover:scale-110 ${!user && 'cursor-not-allowed opacity-50'}`}
                    >
                      {star <= newReview.rating ? (
                        <FaStar className="text-luxury-gold" />
                      ) : (
                        <FaRegStar className="text-gray-600 hover:text-luxury-gold/50" />
                      )}
                    </button>
                  ))}
                  <span className="ml-2 text-gray-400">
                    {newReview.rating > 0 ? `${newReview.rating} stars` : 'Select rating'}
                  </span>
                </div>
              </div>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder={user ? "Share your thoughts about this product..." : "Please sign in to write a review"}
                className="w-full p-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none resize-none h-24"
                required
                disabled={!user}
              />
              <button
                type="submit"
                disabled={!user}
                className={`mt-3 px-6 py-2 bg-gradient-to-r from-luxury-gold to-primary-light text-black rounded-full font-semibold transition-all duration-300 ${
                  !user ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[0_0_15px_rgba(184,134,11,0.2)]'
                }`}
              >
                {user ? 'Submit Review' : 'Sign in to Review'}
              </button>
            </form>

            {/* Reviews List */}
            <div className="space-y-4">
              {reviews.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No reviews yet. Be the first to review this product!</p>
              ) : (
                <motion.div className="space-y-4">
                  {reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-lg bg-black/30 border border-luxury-gold/20"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-luxury-gold">{review.user}</span>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, index) => (
                          <span key={index}>
                            {index < review.rating ? (
                              <FaStar className="text-luxury-gold" />
                            ) : (
                              <FaRegStar className="text-gray-600" />
                            )}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-300">{review.comment}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPage; 
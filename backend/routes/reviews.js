const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const { auth } = require('../middleware/auth');

// Get reviews for a product
router.get('/product/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate('user', 'name')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
});

// Add a review (requires authentication)
router.post('/', auth, async (req, res) => {
  try {
    const { productId, rating, comment } = req.body;
    
    // Check if user has already reviewed this product
    const existingReview = await Review.findOne({
      product: productId,
      user: req.user._id
    });

    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this product' });
    }

    const review = new Review({
      product: productId,
      user: req.user._id,
      rating,
      comment
    });

    await review.save();

    // Populate user information before sending response
    await review.populate('user', 'name');
    
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error: error.message });
  }
});

// Update review (owner only)
router.put('/:id', auth, async (req, res) => {
  try {
    const review = await Review.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!review) {
      return res.status(404).json({ message: 'Review not found or unauthorized' });
    }

    const { rating, comment } = req.body;
    review.rating = rating;
    review.comment = comment;

    await review.save();
    await review.populate('user', 'name');

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review', error: error.message });
  }
});

module.exports = router; 
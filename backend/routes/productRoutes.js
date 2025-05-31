import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create initial sample products if none exist
router.post('/init', async (req, res) => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      const sampleProducts = [
        {
          name: 'Midnight Rose',
          description: 'A seductive blend of dark rose, patchouli, and vanilla, perfect for evening wear.',
          price: 89.99,
          imageUrl: 'https://images.unsplash.com/photo-1557170334-a9632d3bba88?auto=format&fit=crop&w=500&q=80',
          category: 'Floral'
        },
        {
          name: 'Ocean Breeze',
          description: 'Fresh and invigorating scent with notes of sea salt, citrus, and white musk.',
          price: 75.99,
          imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80',
          category: 'Fresh'
        },
        {
          name: 'Golden Amber',
          description: 'Warm and sophisticated fragrance featuring amber, sandalwood, and oriental spices.',
          price: 120.00,
          imageUrl: 'https://images.unsplash.com/photo-1590736969997-5c4f3d87636b?auto=format&fit=crop&w=500&q=80',
          category: 'Oriental'
        },
        {
          name: 'Spring Garden',
          description: 'A light and floral composition with jasmine, lily of the valley, and fresh green notes.',
          price: 95.50,
          imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80',
          category: 'Floral'
        },
        {
          name: 'Velvet Oud',
          description: 'An exotic and luxurious blend of oud wood, Bulgarian rose, and precious resins.',
          price: 150.00,
          imageUrl: 'https://images.unsplash.com/photo-1588405748880-8565e9a41a9e?auto=format&fit=crop&w=500&q=80',
          category: 'Woody'
        }
      ];

      await Product.insertMany(sampleProducts);
      res.status(201).json({ message: 'Sample products created successfully' });
    } else {
      res.json({ message: 'Products already exist' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 
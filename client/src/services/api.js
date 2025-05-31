import axios from 'axios';
import { products } from '../data/products';

const API_BASE_URL = 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Simulating API call with local data
export const getProducts = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return products;
}; 
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const api = {
  baseURL: API_BASE_URL,
  endpoints: {
    products: '/api/products',
    auth: '/api/auth',
    cart: '/api/cart'
  },
  headers: {
    'Content-Type': 'application/json'
  }
}; 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      setSuccessMessage('Registration successful! Redirecting to login...');
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else if (err.response?.status === 400) {
        setError('Email already exists. Please try logging in.');
      } else {
        setError('An error occurred during registration. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-black via-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md"
          >
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-luxury-gold/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-accent text-luxury-gold mb-2">Create Account</h2>
                <p className="text-gray-400">Join our luxury fragrance community</p>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6"
                >
                  <p className="text-red-500 text-sm">{error}</p>
                </motion.div>
              )}

              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6"
                >
                  <p className="text-green-500 text-sm">{successMessage}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-12 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-luxury-gold"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">Password must be at least 6 characters long</p>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-12 py-3 rounded-lg bg-black/50 border border-luxury-gold/20 text-gray-300 placeholder-gray-500 focus:border-luxury-gold focus:outline-none"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-luxury-gold to-primary-light text-black font-semibold hover:shadow-[0_0_25px_rgba(184,134,11,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1a1a1a] text-gray-400">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border border-luxury-gold/20 rounded-lg hover:bg-luxury-gold/10 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" fill="#4285F4"/>
                        <path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" fill="#34A853"/>
                        <path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" fill="#FBBC05"/>
                        <path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" fill="#EA4335"/>
                      </g>
                    </svg>
                    <span className="text-gray-300">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-2 border border-luxury-gold/20 rounded-lg hover:bg-luxury-gold/10 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fillRule="evenodd">
                        <path d="M17.0062 9.00625C17.0062 4.03125 13.0062 0 8.00625 0C3.00625 0 -0.99375 4.03125 -0.99375 9.00625C-0.99375 13.5 1.65625 17.2188 5.34375 17.8875V11.5688H3.69375V9.00625H5.34375V7.03125C5.34375 4.78125 6.43125 3.5625 8.46875 3.5625C9.43125 3.5625 10.4375 3.75 10.4375 3.75V5.34375H9.3125C8.21875 5.34375 7.875 5.96875 7.875 6.65625V9.00625H10.3125L9.96875 11.5688H7.875V17.8875C11.5625 17.2188 14.2125 13.5 14.2125 9.00625H17.0062Z" fill="#1877F2"/>
                      </g>
                    </svg>
                    <span className="text-gray-300">Facebook</span>
                  </button>
                </div>

                <p className="text-center text-gray-400 mt-8">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-luxury-gold hover:text-primary-light transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 
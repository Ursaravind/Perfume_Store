import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import BrandScroller from '../components/BrandScroller'
import { getProducts } from '../services/api'

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const productsPerLoad = 3;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      console.log('Fetching products...');
      const data = await getProducts();
      console.log('Products received:', data);
      setProducts(data);
      setError(null);
    } catch (err) {
      console.error('Error details:', err);
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleProducts(prev => Math.min(prev + productsPerLoad, products.length));
      setIsLoadingMore(false);
    }, 600);
  };

  useEffect(() => {
    console.log('Current products:', products);
    console.log('Loading state:', loading);
    console.log('Error state:', error);
    console.log('Visible products:', visibleProducts);
  }, [products, loading, error, visibleProducts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 animate-gradient-x">
      <Navbar />
      <Banner />
      <BrandScroller />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent inline-block">
            Featured Perfumes
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of luxury fragrances, each telling its own unique story
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-600 text-lg mb-4">{error}</p>
              <button
                onClick={fetchProducts}
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : products.length === 0 ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-gray-500 text-lg">No products available.</p>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {products.slice(0, visibleProducts).map((product, index) => (
                <div
                  key={product.id}
                  className="opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    description={product.description}
                    price={product.sizes[0].price}
                    imageUrl={product.image}
                    rating={product.rating}
                    sizes={product.sizes}
                  />
                </div>
              ))}
            </div>
            
            {visibleProducts < products.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoadingMore}
                  className={`
                    px-8 py-4 bg-black text-white rounded-full
                    hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
                    flex items-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                >
                  {isLoadingMore ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <span>Load More</span>
                      <span className="text-sm opacity-75">
                        ({visibleProducts} of {products.length})
                      </span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default HomePage 
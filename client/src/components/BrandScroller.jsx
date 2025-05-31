import React from 'react';

const brands = [
  {
    name: "Chanel",
    logo: "/logos/chanel.png"
  },
  {
    name: "Dior",
    logo: "/logos/dior.png"
  },
  {
    name: "Tom Ford",
    logo: "/logos/ford.png"
  },
  {
    name: "Yves Saint Laurent",
    logo: "/logos/ysl.png"
  },
  {
    name: "Versace",
    logo: "/logos/verace.png"
  },
  {
    name: "Gucci",
    logo: "/logos/Gucci.png"
  },
  {
    name: "Jo Malone",
    logo: "/logos/jm.png"
  },
  
];

function BrandScroller() {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Popular Luxury Brands
        </h2>
        
        <div className="relative">
          {/* Gradient Overlay Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/50 to-transparent z-10"></div>
          
          {/* Gradient Overlay Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/50 to-transparent z-10"></div>
          
          {/* Scrolling Container */}
          <div className="flex space-x-12 animate-scroll">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div
                key={`brand-1-${index}`}
                className="flex flex-col items-center space-y-3 min-w-[150px] group"
              >
                <div className="w-24 h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {brands.map((brand, index) => (
              <div
                key={`brand-2-${index}`}
                className="flex flex-col items-center space-y-3 min-w-[150px] group"
              >
                <div className="w-24 h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandScroller; 
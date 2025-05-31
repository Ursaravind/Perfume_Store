import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-black relative">
      {/* Luxury overlay pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-gold/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(184,134,11,0.03) 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }}
        ></div>
      </div>

      {/* Animated corner accents */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold/50 to-transparent"></div>
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-luxury-gold/50 to-transparent"></div>
      </div>
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-luxury-gold/50 to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-luxury-gold/50 to-transparent"></div>
      </div>
      <div className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 h-full w-1 bg-gradient-to-t from-luxury-gold/50 to-transparent"></div>
      </div>
      <div className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-luxury-gold/50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 h-full w-1 bg-gradient-to-t from-luxury-gold/50 to-transparent"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout; 
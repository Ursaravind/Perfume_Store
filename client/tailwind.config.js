/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Playfair Display', 'serif'],
        'secondary': ['Montserrat', 'sans-serif'],
        'accent': ['Cinzel', 'serif']
      },
      colors: {
        primary: {
          DEFAULT: '#B8860B', // Gold
          light: '#DAA520',
          dark: '#8B6914',
        },
        secondary: {
          DEFAULT: '#FF1493', // Deep Pink
          light: '#FF69B4',
          dark: '#C71585',
        },
        luxury: {
          black: '#1A1A1A',
          gold: '#FFD700',
          darkGold: '#B8860B',
          pink: '#FF1493',
        },
        'primary-dark': '#4f46e5',
        'luxury-gold': '#d4af37',
        'luxury-silver': '#c0c0c0',
        'luxury-pearl': '#f0f0f0',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fadeIn': 'fadeIn 0.5s ease-in forwards',
        'fadeInUp': 'fadeInUp 0.5s ease-out forwards',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-pattern': 'linear-gradient(to right bottom, rgba(15, 23, 42, 0.95), rgba(88, 28, 135, 0.95), rgba(15, 23, 42, 0.95))',
        'gradient-luxury': 'linear-gradient(to right, #1A1A1A, #FF1493)',
        'gradient-gold': 'linear-gradient(to right, #B8860B, #FFD700)',
        'gradient-dark': 'linear-gradient(to bottom, #1A1A1A, #2D2D2D)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 
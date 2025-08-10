/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'champagne': {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#f9f0c4',
          300: '#f4e397',
          400: '#ecd362',
          500: '#e4c441',
          600: '#d4af37',
          700: '#b8942d',
          800: '#967629',
          900: '#7a6126',
        },
        'burgundy': {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d2d2',
          300: '#f4b0b0',
          400: '#ec8080',
          500: '#e15555',
          600: '#cd3333',
          700: '#ab2626',
          800: '#8d2323',
          900: '#722323',
        },
        'sage': {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b2a3',
          400: '#7a8f7a',
          500: '#5c735c',
          600: '#485a48',
          700: '#3c4a3c',
          800: '#323d32',
          900: '#2a332a',
        },
        'cream': {
          50: '#fefefe',
          100: '#fefcf7',
          200: '#fdf7e7',
          300: '#fbf0d1',
          400: '#f7e4a6',
          500: '#f2d574',
          600: '#ebc441',
          700: '#d4af37',
          800: '#b8942d',
          900: '#967629',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

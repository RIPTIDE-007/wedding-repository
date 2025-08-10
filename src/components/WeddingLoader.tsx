import React from 'react';
import { Heart } from 'lucide-react';

const WeddingLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cream-50 via-champagne-50 to-sage-50 flex items-center justify-center z-50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-champagne-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-burgundy-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-24 h-24 bg-sage-100 rounded-full opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-cream-200 rounded-full opacity-40 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-champagne-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 right-10 w-28 h-28 bg-sage-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Main Loader Container */}
      <div className="relative text-center animate-fade-in">
        {/* Decorative Ring */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto rounded-full border-2 border-champagne-200 relative animate-spin-slow">
            {/* Decorative dots on the ring */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-champagne-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-sage-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-burgundy-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cream-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Inner circle with gradient */}
          <div className="absolute inset-4 bg-gradient-to-br from-champagne-100 via-white to-sage-100 rounded-full shadow-2xl flex items-center justify-center">
            {/* A&A Logo */}
            <div className="relative">
              {/* Main initials */}
              <div className="flex items-center justify-center">
                <span className="font-script text-6xl text-burgundy-700 animate-pulse">A</span>
                <div className="mx-2 flex flex-col items-center">
                  <Heart className="text-champagne-600 fill-champagne-600 animate-bounce" size={20} />
                  <div className="w-8 h-px bg-sage-400 mt-1"></div>
                </div>
                <span className="font-script text-6xl text-burgundy-700 animate-pulse" style={{ animationDelay: '0.5s' }}>A</span>
              </div>
              
              {/* Subtitle */}
              <div className="text-center mt-2">
                <p className="font-serif text-sage-600 text-sm tracking-widest uppercase">Akhil & Aswathy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Loading text with animated dots */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-champagne-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-sage-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-burgundy-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* <p className="font-serif text-burgundy-700 text-lg animate-pulse">
            Loading Your Love Story
          </p> */}
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
            <span className="text-sage-500 text-2xl animate-pulse">💕</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Additional CSS for custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default WeddingLoader;
import React, { useState, useEffect } from 'react';
import { Clock, Diamond, Heart } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-09-14T10:30:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-sage-100 via-cream-100 to-champagne-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-burgundy-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-champagne-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-sage-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-burgundy-400 to-transparent"></div>
            <Clock className="mx-6 text-burgundy-600" size={36} />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-burgundy-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-burgundy-800 mb-4 font-medium">
            Countdown to Forever
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <Diamond className="text-champagne-600 mr-2" size={20} />
            <div className="w-16 h-px bg-champagne-400"></div>
            <Diamond className="text-champagne-600 mx-4" size={16} />
            <div className="w-16 h-px bg-champagne-400"></div>
            <Diamond className="text-champagne-600 ml-2" size={20} />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div key={unit} className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-2xl border border-champagne-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne-200/20 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-burgundy-700 mb-3 leading-none">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-burgundy-600 font-medium capitalize tracking-widest text-xs sm:text-sm md:text-base">
                    {unit}
                  </div>
                </div>
                
                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-champagne-300 opacity-30"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-champagne-300 opacity-30"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-burgundy-700 font-script font-medium italic mb-2">
            Until we become one
          </p>
          <div className="flex items-center justify-center">
            <div className="w-12 h-px bg-sage-400"></div>
            <Heart className="mx-4 text-burgundy-500 fill-burgundy-500" size={20} />
            <div className="w-12 h-px bg-sage-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
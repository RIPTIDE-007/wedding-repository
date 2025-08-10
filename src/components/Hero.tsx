import React, { useEffect, useState } from 'react';
import { Heart, Calendar, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Sophisticated Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://i.ibb.co/TMgMDKs2/1.jpg"
          alt="Elegant couple portrait"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-900/60 via-sage-900/40 to-champagne-900/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Elegant Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="text-champagne-300" size={16 + Math.random() * 12} />
            ) : i % 3 === 1 ? (
              <Sparkles className="text-cream-200" size={14 + Math.random() * 10} />
            ) : (
              <div className="w-2 h-2 bg-champagne-400 rounded-full opacity-60"></div>
            )}
          </div>
        ))}
      </div>

      {/* Sophisticated Content */}
      <div className={`relative z-10 text-center text-white px-6 max-w-4xl transition-all duration-2000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Decorative Top Element */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent"></div>
            <Calendar className="mx-6 text-champagne-200" size={40} />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent"></div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-8 tracking-wider text-cream-50">
            Save the Date
          </h1>
          
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-px bg-champagne-300"></div>
            <div className="mx-4 w-3 h-3 border border-champagne-300 rotate-45"></div>
            <div className="w-24 h-px bg-champagne-300"></div>
          </div>
          
<p className="text-lg sm:text-xl md:text-2xl font-script font-medium italic text-champagne-100 mb-12 leading-relaxed">
    മംഗല്യം തന്തുനാനേന മമജീവനഹേതുനാ  <br />
    കണ്ഠേ ബധ്നാമി സുഭഗേ ത്വമജീവ ശതം സമാ:
</p>
          
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-wide mb-2">
            <span className="text-champagne-200">Aswathy</span>
            <span className="mx-6 text-cream-200 font-script text-3xl sm:text-4xl md:text-5xl">&</span>
            <span className="text-champagne-200">Akhil</span>
          </div>
        </div>
        
        <div className="text-lg sm:text-xl md:text-2xl font-sans font-light text-cream-100">
          <div className="mb-3 flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-champagne-400"></div>
            <span>September 14, 2025</span>
            <div className="w-8 h-px bg-champagne-400"></div>
          </div>
          <p className="text-champagne-200 font-medium px-4">Pazheri Palace Vellaramkunnu • Mannarkad, Palakkad</p>
        </div>
      </div>

      {/* Elegant Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-cream-50 via-cream-50/50 to-transparent"></div>
      
      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border border-champagne-300 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1 h-4 bg-champagne-300 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
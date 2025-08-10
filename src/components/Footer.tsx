import React from 'react';
import { Heart, Mail, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-burgundy-800 via-sage-800 to-champagne-800 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #d4af37 1px, transparent 1px), radial-gradient(circle at 75% 75%, #722323 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Contact Info */}
        <div className="text-center mb-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6">
            <div className="flex items-center gap-3 group justify-center">
              <div className="w-10 h-10 bg-champagne-600/20 rounded-full flex items-center justify-center group-hover:bg-champagne-600/30 transition-colors">
                <Mail className="text-champagne-300" size={18} />
              </div>
              <a href="mailto:sinuam97@gmail.com" className="hover:text-champagne-300 transition-colors">
                sinuam97@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 group justify-center">
              <div className="w-10 h-10 bg-sage-600/20 rounded-full flex items-center justify-center group-hover:bg-sage-600/30 transition-colors">
                <Phone className="text-sage-300" size={18} />
              </div>
              <a href="tel:+919061117351" className="hover:text-sage-300 transition-colors">
                +91 9061117351
              </a>
            </div>
            <div className="flex items-center gap-3 group justify-center">
              <div className="w-10 h-10 bg-burgundy-600/20 rounded-full flex items-center justify-center group-hover:bg-burgundy-600/30 transition-colors">
                <Phone className="text-burgundy-300" size={18} />
              </div>
              <a href="tel:+918547604466" className="hover:text-burgundy-300 transition-colors">
                +91 9495197020
              </a>
            </div>
          </div>
        </div>

        {/* Hashtag */}
        <div className="text-center mb-8">
          <div className="bg-burgundy-700/30 backdrop-blur-sm rounded-2xl p-4 border border-burgundy-500/30 inline-block">
            <p className="text-champagne-200 text-lg font-medium">
              #AkhilAshwathy2025
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
          <Heart className="mx-4 text-champagne-300 fill-champagne-300" size={20} />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center space-y-2">
          <p className="text-champagne-200 font-script">
            Built with love by Abhishek
          </p>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-champagne-400" size={14} />
            <p className="text-sage-300 text-sm">
              © 2025 Akhil & Ashwathy Wedding
            </p>
            <Sparkles className="text-champagne-400" size={14} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
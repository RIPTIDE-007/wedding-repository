import React from "react";

const VideoSection: React.FC = () => (
  <div className="relative bg-gradient-to-br from-cream-50 via-champagne-50 to-sage-50 rounded-3xl overflow-hidden shadow-2xl border border-champagne-200 p-6 animate-fade-in">
    {/* Decorative Elements */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-4 left-4 w-16 h-16 bg-champagne-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-8 right-6 w-8 h-8 bg-burgundy-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-6 left-8 w-12 h-12 bg-sage-100 rounded-full opacity-25 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 bg-cream-200 rounded-full opacity-40"></div>
    </div>

    {/* Header Section */}
    <div className="text-center mb-6 relative z-10">
      <div className="inline-flex items-center justify-center mb-3">
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
        <span className="mx-4 text-champagne-600 text-2xl">💕</span>
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
      </div>
      <h2 className="font-script text-3xl text-burgundy-700 mb-2">Save the Date</h2>
      <p className="font-serif text-sage-600 text-sm">Our Love Story Begins</p>
    </div>

    {/* Video Container */}
    <div className="relative">
      {/* Decorative Frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-champagne-200 via-cream-200 to-sage-200 rounded-2xl p-1">
        <div className="w-full h-full bg-white rounded-xl"></div>
      </div>
      
      {/* Video Content */}
      <div className="relative aspect-[9/16] w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full relative z-10"
          src="https://www.youtube.com/embed/vfzIUY7v5-g"
          title="Save the Date - Our Wedding Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>

    {/* Footer Section */}
    <div className="text-center mt-6 relative z-10">
      <div className="inline-flex items-center justify-center mb-2">
        <div className="w-6 h-px bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
        <span className="mx-3 text-sage-500 text-lg">✨</span>
        <div className="w-6 h-px bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
      </div>
      <p className="font-sans text-xs text-sage-500 uppercase tracking-wider">
        Tap to watch our story unfold
      </p>
    </div>
  </div>
);

export default VideoSection;

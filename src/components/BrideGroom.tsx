import React from 'react';
import { Heart, Sparkles, Crown } from 'lucide-react';

const BrideGroom = () => {
  const brideData = {
    name: "Aswathy M",
    role: "The Bride",
    image: "https://i.ibb.co/C3fdPWXb/Whats-App-Image-2025-07-13-at-11-30-53.jpg",
    bio: "A passionate teacher and artist who finds magic in life's simplest moments. Aswathy moves to the rhythm of music, dances with joy, cherishes the nostalgia of vintage movies, and surrounds herself with nothing but good vibes.",
    favorite: "Sunset walks and handwritten letters",
    profession: "Teacher",
    socialUrl: "your-bride-social-media-link-here"
  };

  const groomData = {
    name: "Akhil Ashokan",
    role: "The Groom",
    image: "https://i.ibb.co/d4fM0H7t/Whats-App-Image-2025-07-13-at-11-33-35.jpg",
    bio: "An architect who designs with passion and builds with love. Akhil thrives on hiking through rugged trails, embarking on road trips behind the wheel, and exploring new horizons",
    favorite: "Mountain adventures and jazz music",
    profession: "Architectural Designer",
    socialUrl: "your-groom-social-media-link-here"
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-sage-50 via-cream-50 to-champagne-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border border-burgundy-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-champagne-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-sage-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-burgundy-400 to-transparent"></div>
            <Crown className="mx-6 text-burgundy-600" size={36} />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-burgundy-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-burgundy-800 mb-6 font-medium">
            The Happy Couple
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="text-champagne-600 mr-3" size={20} />
            <div className="w-20 h-px bg-champagne-400"></div>
            <Heart className="text-burgundy-500 fill-burgundy-500 mx-6" size={24} />
            <div className="w-20 h-px bg-champagne-400"></div>
            <Sparkles className="text-champagne-600 ml-3" size={20} />
          </div>
          
          <p className="text-lg md:text-xl text-sage-700 font-light max-w-3xl mx-auto leading-relaxed">
            Two souls destined to become one, ready to embark on their greatest adventure together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 max-w-7xl mx-auto">
          {/* Bride */}
          <div className="text-center group cursor-pointer" onClick={() => window.open('https://www.instagram.com/_aswathy__m?igsh=MTFteWlxb3lsbXN2eg==', '_blank')}>
            <div className="relative mb-10">
              {/* Decorative Frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-champagne-200 via-sage-200 to-burgundy-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-br from-white via-cream-100 to-champagne-100 rounded-full shadow-2xl"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden shadow-3xl border-4 border-champagne-200/70 group-hover:border-champagne-300 transition-all duration-700">
                <img
                  src={brideData.image}
                  alt={brideData.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-champagne-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Elegant Badge */}
              <div className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-champagne-400 to-champagne-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <Heart className="text-white fill-white" size={32} />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 -left-4 w-8 h-8 border-2 border-champagne-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-12 -right-6 w-6 h-6 bg-sage-300 rounded-full opacity-40"></div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-serif text-burgundy-800 font-medium">{brideData.name}</h3>
              <p className="text-champagne-600 font-medium text-lg tracking-wide">{brideData.role}</p>
              <p className="text-sage-600 font-medium text-sm uppercase tracking-widest">{brideData.profession}</p>
              <div className="w-16 h-px bg-champagne-400 mx-auto my-6"></div>
              <p className="text-sage-700 leading-relaxed max-w-md mx-auto text-base">{brideData.bio}</p>
              <div className="pt-4">
                <p className="text-champagne-600 italic font-script text-lg">"{brideData.favorite}"</p>
              </div>
            </div>
          </div>

          {/* Groom */}
          <div className="text-center group cursor-pointer" onClick={() => window.open('https://www.instagram.com/akhil_ash96?igsh=MTgyanR5MG1iMjhkNA==', '_blank')}>
            <div className="relative mb-10">
              {/* Decorative Frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-sage-200 via-champagne-200 to-burgundy-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-3 bg-gradient-to-br from-white via-cream-100 to-sage-100 rounded-full shadow-2xl"></div>
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden shadow-3xl border-4 border-sage-200/70 group-hover:border-sage-300 transition-all duration-700">
                <img
                  src={groomData.image}
                  alt={groomData.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Elegant Badge */}
              <div className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <Heart className="text-white fill-white" size={32} />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 -left-4 w-8 h-8 border-2 border-sage-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-12 -right-6 w-6 h-6 bg-champagne-300 rounded-full opacity-40"></div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-serif text-burgundy-800 font-medium">{groomData.name}</h3>
              <p className="text-sage-600 font-medium text-lg tracking-wide">{groomData.role}</p>
              <p className="text-sage-600 font-medium text-sm uppercase tracking-widest">{groomData.profession}</p>
              <div className="w-16 h-px bg-sage-400 mx-auto my-6"></div>
              <p className="text-sage-700 leading-relaxed max-w-md mx-auto text-base">{groomData.bio}</p>
              <div className="pt-4">
                <p className="text-sage-600 italic font-script text-lg">"{groomData.favorite}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;

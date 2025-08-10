import React from 'react';
import { MapPin, Clock, Calendar, ExternalLink, Crown, Diamond } from 'lucide-react';

const EventDetails = () => {
  const handleRSVP = () => {
    window.open('mailto:rsvp@isabellaalexander.com?subject=Wedding RSVP - Isabella & Alexander', '_blank');
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-burgundy-50 via-sage-50 to-champagne-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-burgundy-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-champagne-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-sage-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-burgundy-400 to-transparent"></div>
            <Calendar className="mx-6 text-burgundy-600" size={36} />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-burgundy-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-burgundy-800 mb-6 font-medium">
            Celebration Details
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <Diamond className="text-champagne-600 mr-3" size={20} />
            <div className="w-20 h-px bg-champagne-400"></div>
            <Crown className="text-burgundy-500 mx-6" size={24} />
            <div className="w-20 h-px bg-champagne-400"></div>
            <Diamond className="text-champagne-600 ml-3" size={20} />
          </div>
          
          <p className="text-lg sm:text-xl text-sage-700 font-light max-w-3xl mx-auto leading-relaxed">
            Join us as we celebrate the most important milestones of our journey together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {/* Engagement Ceremony */}
          <div className="group relative">
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-champagne-200 via-sage-200 to-burgundy-200 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-champagne-200/50 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-champagne-400 to-champagne-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Crown className="text-white" size={36} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-burgundy-800 mb-3 font-medium">
                  Wedding Ceremony
                </h3>
                <div className="w-16 h-px bg-champagne-400 mx-auto mb-4"></div>
                <p className="text-champagne-600 font-medium text-lg">Our sacred union</p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-champagne-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-burgundy-800 text-lg mb-1">Date & Time</p>
                    <p className="text-sage-700 text-lg">September 14, 2025</p>
                    <p className="text-champagne-600 font-medium">10:00 AM - 11:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-champagne-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-champagne-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-burgundy-800 text-lg mb-1">Venue</p>
                    <p className="text-sage-700 text-lg font-medium">Pazheri Palace</p>
                    <p className="text-sage-600 text-sm leading-relaxed">Vellaramkunnu<br />Mannarkkad</p>
                  </div>
                </div>

                <button
                  onClick={() => openLink('https://maps.app.goo.gl/X4PxJkpsfebw75ri9')}
                  className="w-full bg-gradient-to-r from-champagne-500 to-champagne-600 text-white py-3 sm:py-4 rounded-2xl font-medium hover:from-champagne-600 hover:to-champagne-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  View Location
                </button>
              </div>
            </div>
          </div>

          {/* Wedding Ceremony */}
          <div className="group relative">
            {/* Decorative Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-sage-200 via-champagne-200 to-burgundy-200 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-sage-200/50 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-burgundy-500 to-burgundy-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Diamond className="text-white" size={36} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif text-burgundy-800 mb-3 font-medium">
                  Reception
                </h3>
                <div className="w-16 h-px bg-burgundy-400 mx-auto mb-4"></div>
                <p className="text-burgundy-600 font-medium text-lg">A celebration of our commitment</p>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-burgundy-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-burgundy-800 text-lg mb-1">Date & Time</p>
                    <p className="text-sage-700 text-lg">September 16, 2025</p>
                    <p className="text-burgundy-600 font-medium">5:30 PM - 9:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-burgundy-600" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-burgundy-800 text-lg mb-1">Venue</p>
                    <p className="text-sage-700 text-lg font-medium">Ann's International Convention & Exhibition Centre</p>
                    <p className="text-sage-600 text-sm leading-relaxed">Eerayil Kadavu<br />Kottayam</p>
                  </div>
                </div>

                <button
                  onClick={() => openLink('https://maps.app.goo.gl/AfD948hG2LARsYsM8')}
                  className="w-full bg-gradient-to-r from-burgundy-600 to-burgundy-700 text-white py-3 sm:py-4 rounded-2xl font-medium hover:from-burgundy-700 hover:to-burgundy-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  View Location
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant RSVP Section */}
        {/* <div className="text-center mt-16 sm:mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-champagne-200/50">
              <h3 className="text-2xl sm:text-3xl font-serif text-burgundy-800 mb-6 font-medium">
                We Hope You Can Join Us
              </h3>
              <div className="w-20 h-px bg-champagne-400 mx-auto mb-8"></div>
              
              <button
                onClick={handleRSVP}
                className="group relative bg-gradient-to-r from-burgundy-600 via-sage-600 to-champagne-600 text-white px-8 sm:px-16 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:from-burgundy-700 hover:via-sage-700 hover:to-champagne-700 transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-burgundy-500/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Crown size={24} />
                  RSVP Now
                  <Diamond size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-champagne-400/20 to-sage-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <p className="text-sage-600 mt-6 text-base sm:text-lg font-medium">
                Please respond by May 1st, 2024
              </p>
              <p className="text-sage-500 mt-2 text-sm">
                Your presence is the greatest gift we could ask for
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EventDetails;

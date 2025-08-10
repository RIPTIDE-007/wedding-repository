import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from 'lucide-react';

const Gallery = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const images = [
        {
      src: "https://i.ibb.co/jNNMdW4/Whats-App-Image-2025-07-13-at-11-28-26.jpg",
      alt: "Romantic engagement portrait"
    },
    {
      src: "https://i.ibb.co/GfVSrP06/Whats-App-Image-2025-07-13-at-11-28-25-2.jpg",
      alt: "Couple in natural setting"
    },
    {
      src: "https://i.ibb.co/qFVK8X0b/Whats-App-Image-2025-07-13-at-11-28-25-1.jpg",
      alt: "Intimate moment together"
    },
    {
      src: "https://i.ibb.co/kgf3CvS6/Whats-App-Image-2025-07-13-at-11-28-25.jpg",
      alt: "Elegant couple portrait"
    },
    {
      src: "https://i.ibb.co/XZH4FGVC/Whats-App-Image-2025-07-13-at-11-28-24-2.jpg",
      alt: "Candid engagement moment"
    },
    {
      src: "https://i.ibb.co/p6WPjQQm/Whats-App-Image-2025-07-13-at-11-28-24.jpg",
      alt: "Beautiful couple photography"
    },
        {
      src: "https://i.ibb.co/DPCgvvD8/Whats-App-Image-2025-07-13-at-11-28-22.jpg",
      alt: "Romantic engagement portrait"
    },
        {
      src: "https://i.ibb.co/JwKGfMbk/Whats-App-Image-2025-07-13-at-11-28-23-1.jpg",
      alt: "Romantic engagement portrait"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-champagne-50 via-sage-50 to-burgundy-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #d4af37 1px, transparent 1px), radial-gradient(circle at 80% 20%, #722323 1px, transparent 1px), radial-gradient(circle at 40% 40%, #5c735c 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px, 100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
            <Image className="mx-6 text-sage-600" size={36} />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-burgundy-800 mb-6 font-medium">
            Engagement Gallery
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-champagne-400"></div>
            <div className="mx-4 w-3 h-3 border border-champagne-400 rotate-45"></div>
            <div className="mx-2 w-2 h-2 bg-sage-400 rounded-full"></div>
            <div className="mx-4 w-3 h-3 border border-champagne-400 rotate-45"></div>
            <div className="w-16 h-px bg-champagne-400"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-sage-700 font-light max-w-3xl mx-auto leading-relaxed">
            Capturing the precious moments that led us to forever — our engagement journey in timeless photographs
          </p>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
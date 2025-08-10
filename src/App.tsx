import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import VideoSection from './components/VideoSection';
import BrideGroom from './components/BrideGroom';
import Gallery from './components/Gallery';
import EventDetails from './components/EventDetails';
import WishesSection from './components/WishesSection';
import Footer from './components/Footer';
import WeddingLoader from './components/WeddingLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for resources, fonts, etc.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    // Also check if all fonts are loaded
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <WeddingLoader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-champagne-50 to-sage-50 animate-fade-in">
      <Hero />
      <CountdownTimer />
      <VideoSection />
      <BrideGroom />
      <Gallery />
      <EventDetails />
      <WishesSection />
      <Footer />
    </div>
  );
}

export default App;
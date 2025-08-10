import React, { useState } from 'react';
import { Heart, Send, MessageCircle, Sparkles, Crown, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const WishesSection = () => {
  const [newWish, setNewWish] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWish.name.trim() || !newWish.message.trim()) return;

    setIsSubmitting(true);
    setError('');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: newWish.name,
        message: newWish.message,
        to_name: 'Wedding Couple',
        reply_to: 'noreply@wedding.com',
        timestamp: new Date().toLocaleString()
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success - clear form and show success state
      setNewWish({ name: '', message: '' });
      setIsSubmitted(true);
      createFloatingHearts();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err: any) {
      console.error('Failed to send wish:', err);
      setError(err.message || 'Failed to send your wish. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const createFloatingHearts = () => {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '✨', '🌟'];
    for (let i = 0; i < 8; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.className = 'fixed text-3xl pointer-events-none z-50 animate-bounce';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.top = '50%';
      heart.style.animation = 'floatUp 4s ease-out forwards';
      document.body.appendChild(heart);
      
      setTimeout(() => {
        if (document.body.contains(heart)) {
          document.body.removeChild(heart);
        }
      }, 4000);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-champagne-50 via-sage-50 to-burgundy-50 relative overflow-hidden">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 border border-champagne-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-burgundy-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-sage-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
            <MessageCircle className="mx-6 text-sage-600" size={36} />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-sage-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-burgundy-800 mb-6 font-medium">
            Share Your Wishes
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="text-champagne-600 mr-3" size={20} />
            <div className="w-20 h-px bg-champagne-400"></div>
            <Heart className="text-burgundy-500 fill-burgundy-500 mx-6" size={24} />
            <div className="w-20 h-px bg-champagne-400"></div>
            <Sparkles className="text-champagne-600 ml-3" size={20} />
          </div>
          
          <p className="text-lg sm:text-xl text-sage-700 font-light max-w-3xl mx-auto leading-relaxed">
            Your love and support mean the world to us. Share your heartfelt wishes as we begin this beautiful new chapter together
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Sophisticated Wish Form */}
          <div className="relative mb-16">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-champagne-200 via-sage-200 to-burgundy-200 rounded-3xl opacity-20"></div>
            
            <form onSubmit={handleSubmit} className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-champagne-200/50">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Heart className="text-white fill-white" size={28} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-burgundy-800 font-medium">
                  Leave Your Blessing
                </h3>
                <div className="w-16 h-px bg-sage-400 mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div className="md:col-span-2 sm:col-span-1">
                  <label className="block text-burgundy-700 font-semibold mb-3 text-lg">Your Name</label>
                  <input
                    type="text"
                    value={newWish.name}
                    onChange={(e) => setNewWish({ ...newWish, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-champagne-200 focus:border-sage-400 focus:outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-burgundy-700 font-semibold mb-3 text-lg">Your Message</label>
                  <textarea
                    value={newWish.message}
                    onChange={(e) => setNewWish({ ...newWish, message: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-champagne-200 focus:border-sage-400 focus:outline-none transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm text-lg leading-relaxed"
                    rows={5}
                    placeholder="Share your heartfelt wishes, blessings, or favorite memory with Aswathy & Akhil ..."
                    required
                  />
                </div>
              </div>
              
              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-center">
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="text-green-600 mr-2" size={24} />
                    <p className="text-green-700 font-medium">Your wish has been sent successfully!</p>
                  </div>
                  <p className="text-green-600 text-sm">Thank you for your beautiful blessing 💕</p>
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`group relative inline-flex items-center gap-3 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-medium text-lg transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105 ${
                    isSubmitting || isSubmitted
                      ? 'bg-gray-400 text-white cursor-not-allowed' 
                      : 'bg-gradient-to-r from-sage-600 to-burgundy-600 text-white hover:from-sage-700 hover:to-burgundy-700 border border-sage-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Sending Your Wishes...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={24} />
                      Wish Sent Successfully!
                      <Heart size={20} className="fill-current" />
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      Send Your Wishes
                      <Sparkles size={20} />
                    </>
                  )}
                  {!isSubmitting && !isSubmitted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-champagne-400/20 to-sage-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0px) scale(1) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-300px) scale(0.5) rotate(180deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default WishesSection;
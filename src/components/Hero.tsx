import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent animate-pulse"></div>
      </div>

      {/* Animated tire pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-orange-500 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border-2 border-orange-400 rounded-full animate-spin-reverse"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border-3 border-orange-300 rounded-full animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`lg:col-span-2 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" />
                <span className="text-orange-500 text-sm font-medium">Expert Tire Retreading Services</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Professional</span>
                <br />
                <span className="text-orange-500">Tire Remolding</span>
                <br />
                <span className="text-gray-300">Solutions</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Located in the heart of Vapi, Gujarat, we provide premium tire retreading services 
                with a customer-centric approach and unmatched expertise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <button 
                  onClick={scrollToServices}
                  className="group inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a 
                  href="tel:9904554984"
                  className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-orange-500 hover:text-orange-500 transform hover:scale-105 transition-all duration-300"
                >
                  Call Now
                </a>
              </div>

              {/* Quick info */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-300">Prime Location in Vapi</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-300">Open from 10 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
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
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
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

          {/* Visual Element */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative overflow-hidden">
                {/* Scroll-Based Spinning Tire */}
                <div className="tire-container absolute inset-0">
                  {/* Outer tire ring */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-30"
                    style={{ transform: `rotate(${scrollY * 0.5}deg)` }}
                  ></div>
                  
                  {/* Main tire body */}
                  <div 
                    className="absolute inset-4 bg-gray-800 rounded-full border-4 border-orange-500/50"
                    style={{ transform: `rotate(${scrollY * 0.3}deg)` }}
                  ></div>
                  
                  {/* Inner tire */}
                  <div 
                    className="absolute inset-12 bg-gray-900 rounded-full border-2 border-orange-400/30"
                    style={{ transform: `rotate(${scrollY * 0.2}deg)` }}
                  ></div>
                  
                  {/* Tire tread pattern */}
                  <div 
                    className="absolute inset-8"
                    style={{ transform: `rotate(${scrollY * 0.4}deg)` }}
                  >
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-8 bg-orange-500/60 rounded"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '50% 0',
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-120px)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Additional tread details */}
                  <div 
                    className="absolute inset-16"
                    style={{ transform: `rotate(${scrollY * -0.3}deg)` }}
                  >
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-6 bg-orange-400/40 rounded"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '50% 0',
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-80px)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Center hub */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-orange-500/50"
                    style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.6}deg)` }}
                  >
                    <div className="absolute inset-2 bg-gray-900 rounded-full">
                      {/* Hub spokes */}
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-0.5 h-6 bg-orange-500/60 rounded"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '50% 0',
                            transform: `translate(-50%, -50%) rotate(${i * 72}deg) translateY(-12px)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-sm text-gray-400 mb-2">Scroll to spin the tire</p>
                  <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto">
                    <div className="w-1 h-3 bg-orange-500 rounded-full mx-auto mt-2 animate-bounce"></div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-orange-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">15+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-orange-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-300">Quality Service</div>
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
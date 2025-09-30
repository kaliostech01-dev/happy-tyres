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
                  {/* Realistic Tire Outer Ring */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-full shadow-2xl"
                    style={{ transform: `rotate(${scrollY * 0.3}deg)` }}
                  >
                    {/* Tire sidewall text */}
                    <div className="absolute inset-4 rounded-full border border-gray-600">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute text-xs text-gray-500 font-mono"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '0 0',
                            transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-130px) rotate(90deg)`,
                          }}
                        >
                          RETREAD
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tire Tread Pattern - Outer */}
                  <div 
                    className="absolute inset-2 rounded-full"
                    style={{ transform: `rotate(${scrollY * 0.4}deg)` }}
                  >
                    {/* Main tread blocks */}
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-8 bg-gray-700 rounded-sm"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '50% 0',
                          transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-140px)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Tire Tread Pattern - Middle */}
                  <div 
                    className="absolute inset-6 rounded-full"
                    style={{ transform: `rotate(${scrollY * -0.2}deg)` }}
                  >
                    {/* Secondary tread pattern */}
                    {[...Array(32)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-6 bg-gray-600 rounded-sm"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '50% 0',
                          transform: `translate(-50%, -50%) rotate(${i * 11.25}deg) translateY(-120px)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Inner Tire Body */}
                  <div 
                    className="absolute inset-12 bg-gradient-to-br from-gray-800 to-black rounded-full border-2 border-gray-700"
                    style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
                  >
                    {/* Inner tread details */}
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-4 bg-gray-500 rounded"
                        style={{
                          top: '50%',
                          left: '50%',
                          transformOrigin: '50% 0',
                          transform: `translate(-50%, -50%) rotate(${i * 18}deg) translateY(-80px)`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Realistic Rim/Hub */}
                  <div 
                    className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg border-2 border-gray-500"
                    style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.5}deg)` }}
                  >
                    {/* Rim outer ring */}
                    <div className="absolute inset-1 bg-gradient-to-br from-gray-200 to-gray-500 rounded-full">
                      {/* Rim spokes */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-8 bg-gradient-to-b from-gray-100 to-gray-400 rounded"
                          style={{
                            top: '50%',
                            left: '50%',
                            transformOrigin: '50% 0',
                            transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-16px)`,
                          }}
                        />
                      ))}
                      
                      {/* Center cap */}
                      <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                        <div className="absolute inset-1 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tire shine/highlight effect */}
                  <div 
                    className="absolute inset-8 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                    style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
                  ></div>
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
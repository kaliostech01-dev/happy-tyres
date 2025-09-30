import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Users, Award, Clock, CheckCircle2, Star } from 'lucide-react';

const stats = [
  { icon: Users, number: '5000+', label: 'Happy Customers' },
  { icon: Award, number: '15+', label: 'Years Experience' },
  { icon: CheckCircle2, number: '100%', label: 'Quality Assured' },
  { icon: Star, number: '4.9', label: 'Customer Rating' }
];

const advantages = [
  {
    title: 'Prime Location',
    description: 'Positioned in the heart of Vapi, we provide accessibility that transcends geographical boundaries.',
    icon: MapPin
  },
  {
    title: 'Customer-Centric Approach',
    description: 'Our dedicated and knowledgeable staff is committed to providing you with the best guidance.',
    icon: Users
  },
  {
    title: 'Exclusive Deals',
    description: 'We offer competitive pricing and exclusive discounts to provide maximum value to our customers.',
    icon: Award
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-40 h-8 bg-gradient-to-l from-orange-500/30 to-transparent transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-6 bg-gradient-to-r from-orange-400/20 to-transparent transform -rotate-12 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
            <Award className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-orange-500 text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-orange-500">Happy Tyres Retrade?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Located in Vapi, Gujarat, we are your trusted partner for professional tire retreading services. 
            Our commitment to quality and customer satisfaction sets us apart.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-3xl font-bold text-white mb-8">
              Professional Tire Retreading Since 2008
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Happy Tyres Retrade has been serving the Vapi community and surrounding areas with 
              exceptional tire retreading services. Our state-of-the-art facility and experienced 
              team ensure every tire meets the highest standards of quality and safety.
            </p>

            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-start group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                    <advantage.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* Main container */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                {/* Business Hours */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-orange-500 mr-2" />
                    Business Hours
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Working Days</span>
                      <span className="text-white">10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Closing hours may vary, please call to confirm
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                    Our Location
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    2nd, Shop no. 16 shed no. A1/16,<br />
                    GIDC, Vapi, Gujarat 396195
                  </p>
                </div>

                {/* Payment Info */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Payment Options
                  </h4>
                  <p className="text-gray-400">
                    Cash payments accepted. Other payment methods may be available - 
                    please confirm for details.
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-400/20 rounded-full"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -left-6 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Parking Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
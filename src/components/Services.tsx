import React, { useEffect, useRef, useState } from 'react';
import { Settings, Shield, Wrench, Truck, CheckCircle, Clock } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Tire Retreading',
    description: 'Professional tire retreading services using advanced techniques and high-quality materials for extended tire life.',
    features: ['Quality Materials', 'Expert Craftsmanship', 'Certified Process']
  },
  {
    icon: Shield,
    title: 'Quality Inspection',
    description: 'Comprehensive tire inspection and quality assurance to ensure maximum safety and performance.',
    features: ['Safety Testing', 'Performance Check', 'Durability Assessment']
  },
  {
    icon: Wrench,
    title: 'Tire Repair',
    description: 'Expert tire repair services for various types of damage, extending the life of your tires.',
    features: ['Damage Assessment', 'Professional Repair', 'Quality Guarantee']
  },
  {
    icon: Truck,
    title: 'Commercial Solutions',
    description: 'Specialized services for commercial vehicles and fleet management with bulk service options.',
    features: ['Fleet Services', 'Bulk Pricing', 'Quick Turnaround']
  }
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute('data-index'));
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_orange_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
            <Settings className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-orange-500 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-orange-500">Tire Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide complete tire retreading and remolding services with state-of-the-art equipment 
            and experienced professionals dedicated to quality and customer satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`group bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today for professional tire retreading services. We're committed to providing 
              the best quality and customer service in Vapi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9904554984"
                className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Clock className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-orange-500 hover:text-orange-500 transform hover:scale-105 transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
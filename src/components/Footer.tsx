import React from 'react';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Happy Tyres Retrade
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for professional tire retreading services in Vapi, Gujarat. 
              Quality, reliability, and customer satisfaction are our top priorities.
            </p>
            <div className="flex items-center text-gray-400">
              <Heart className="w-4 h-4 text-orange-500 mr-2" />
              <span>Serving Vapi since 2008</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a 
                    href="tel:09904554984"
                    className="text-white hover:text-orange-500 transition-colors duration-300"
                  >
                    099045 54984
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-white">
                    2nd, Shop no. 16 shed no. A1/16,<br />
                    GIDC, Vapi, Gujarat 396195
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Business Hours</p>
                  <p className="text-white">Working Days: 10:00 AM onwards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  Tire Retreading
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  Quality Inspection
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  Tire Repair Services
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  Commercial Solutions
                </span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                  Expert Consultation
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Happy Tyres Retrade. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-gray-400 text-sm mr-4">
                Payment accepted: Cash
              </p>
              <p className="text-gray-400 text-sm">
                Parking Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
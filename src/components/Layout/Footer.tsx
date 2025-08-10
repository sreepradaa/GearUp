import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gearup-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-gearup-navy" />
              </div>
              <span className="text-2xl font-bold">GearUp</span>
            </div>
            <p className="text-gearup-light-gray mb-4 max-w-md">
              We automate. You accelerate. GearUp specializes in AI automation solutions 
              that help businesses eliminate manual bottlenecks and boost productivity by 10x.
            </p>
           <div className="flex space-x-4">
  <motion.a
    href="https://linkedin.com/company/gearupagency"
    whileHover={{ scale: 1.1 }}
    className="w-10 h-10 bg-gearup-dark rounded-lg flex items-center justify-center hover:bg-gearup-neon hover:text-gearup-navy transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin className="w-5 h-5" />
  </motion.a>
  
  <motion.a
    href="https://instagram.com/gearupagency" // Replace with your actual Instagram URL if different
    whileHover={{ scale: 1.1 }}
    className="w-10 h-10 bg-gearup-dark rounded-lg flex items-center justify-center hover:bg-gearup-neon hover:text-gearup-navy transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="w-5 h-5" />
  </motion.a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'FAQs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gearup-light-gray hover:text-gearup-neon transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gearup-neon" />
                <span className="text-gearup-light-gray">getgearup.agency@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gearup-neon" />
                <span className="text-gearup-light-gray">Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gearup-dark mt-8 pt-8 text-center">
          <p className="text-gearup-light-gray">
            © 2025 GearUp AI Automation Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
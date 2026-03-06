import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/ff65cea2659fd503c2d5948adc98f9e9112dec2d.png';

export function Footer() {
  return (
    <footer className="bg-[#0f1729] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="EZ Digital Solutions" className="h-12 w-auto brightness-0 invert" />
            <p className="text-[#8fa5c9] leading-relaxed">
              AI systems studio building AI agents, automation systems, and intelligent digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-[#8fa5c9] hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#8fa5c9] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-[#8fa5c9] hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-[#8fa5c9] hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[#8fa5c9] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#8fa5c9] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@ezdigitalsolutions.nl" className="text-[#8fa5c9] hover:text-white transition-colors">
                  info@ezdigitalsolutions.nl
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                <a href="tel:+31644841188" className="text-[#8fa5c9] hover:text-white transition-colors">
                  +31 6 44841188
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#5b7fc7] flex-shrink-0 mt-0.5" />
                <span className="text-[#8fa5c9]">
                  Haagbeemd 57<br />
                  5641NB Eindhoven<br />
                  Netherlands
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2d3561]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#8fa5c9] text-sm">
              © {new Date().getFullYear()} EZ Digital Solutions B.V. - KVK: 96596546
            </p>
            <p className="text-[#8fa5c9] text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

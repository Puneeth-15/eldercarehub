import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-care-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">ElderCareHub</h3>
            <p className="text-gray-300 mb-4">
              Connecting families with trusted caregivers for elderly and childcare services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-care-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-care-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-care-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/providers" className="text-gray-300 hover:text-white transition-colors">
                  Find Caregivers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">For Providers</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/apply" className="text-gray-300 hover:text-white transition-colors">
                  Become a Caregiver
                </Link>
              </li>
              <li>
                <Link to="/provider-faq" className="text-gray-300 hover:text-white transition-colors">
                  Provider FAQ
                </Link>
              </li>
              <li>
                <Link to="/provider-resources" className="text-gray-300 hover:text-white transition-colors">
                  Provider Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@eldercarehub.com" className="text-gray-300 hover:text-white transition-colors">
                  info@eldercarehub.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919966789848" className="text-gray-300 hover:text-white transition-colors">
                  +91 (996) 678-9848
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ElderCareHub. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

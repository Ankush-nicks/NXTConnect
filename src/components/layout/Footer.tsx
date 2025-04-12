
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent mb-4">
              CreatorCollective
            </div>
            <p className="text-gray-600 max-w-md">
              Empowering learners to build skills, grow their personal brand, and connect with mentors in a supportive community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-brand-blue">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-600 hover:text-brand-blue">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-brand-blue">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="text-gray-600 hover:text-brand-blue">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-blue">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} CreatorCollective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

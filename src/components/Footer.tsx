import React from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-primary-100 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <Logo />
            <p className="mt-6">
              Professional web development and digital solutions for small businesses in Auckland.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="mailto:conor@localwebrefresh.co.nz" 
                className="w-10 h-10 rounded-full border border-primary-700 flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="#contact" 
                className="w-10 h-10 rounded-full border border-primary-700 flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a 
                href="#contact" 
                className="w-10 h-10 rounded-full border border-primary-700 flex items-center justify-center hover:bg-primary-700 transition-colors duration-200"
                aria-label="Location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['services', 'about', 'technologies', 'contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="flex items-center hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span className="capitalize">{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {['Website Development', 'Domain Setup', 'DNS Management', 'Business Email', 'Technical Support'].map((service) => (
                <li key={service}>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="flex items-center hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {['North Auckland', 'West Auckland', 'Central Auckland'].map((area) => (
                <li key={area} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <a href="mailto:conor@localwebrefresh.co.nz" className="text-primary-100 hover:text-white transition-colors duration-200">
                conor@localwebrefresh.co.nz
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-800 text-center sm:flex sm:justify-between">
          <p>© {currentYear} Local Web Refresh. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Proudly serving small businesses in Auckland
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
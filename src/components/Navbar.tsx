import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Services', to: 'services' },
  { name: 'About', to: 'about' },
  { name: 'Technologies', to: 'technologies' },
  { name: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex-shrink-0">
          <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer">
            <Logo />
          </ScrollLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="nav-link"
              activeClass="active"
              spy={true}
            >
              {link.name}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="btn btn-primary py-2"
          >
            Free Consultation
          </ScrollLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-100 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary-900 shadow-md md:hidden">
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="nav-link py-2"
                  activeClass="active"
                  spy={true}
                  onClick={closeMenu}
                >
                  {link.name}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn btn-primary"
                onClick={closeMenu}
              >
                Free Consultation
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
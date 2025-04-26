import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 p-4 rounded-lg shadow-md">
            <div className="flex flex-col space-y-4">
              <NavLinks />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks: React.FC = () => {
  return (
    <>
      <Link 
        to="/products" 
        className="text-primary font-medium hover:text-secondary transition-colors duration-300"
      >
        Our Products
      </Link>
      <Link 
        to="/about" 
        className="text-primary font-medium hover:text-secondary transition-colors duration-300"
      >
        About
      </Link>
      <Link 
        to="/contact" 
        className="text-primary font-medium hover:text-secondary transition-colors duration-300"
      >
        Contact Us
      </Link>
    </>
  );
};

export default Navbar;
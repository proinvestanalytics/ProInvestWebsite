import React, { useState } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />

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
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 p-4 rounded-lg shadow-md">
            <div className="flex flex-col space-y-4">
              <MobileNavLinks onClose={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Products Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className="text-primary font-medium hover:text-secondary transition-colors duration-300 flex items-center gap-1 py-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Our Products
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown Menu - pt-2 creates invisible bridge to prevent gap */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 pt-1 z-50">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
              <Link
                to="/products/teamops"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="font-semibold text-primary">TeamOps</div>
                <div className="text-sm text-gray-500">For youth & amateur teams</div>
              </Link>
              <Link
                to="/products/proinvest-ecosystem"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="font-semibold text-primary">ProInvest Ecosystem</div>
                <div className="text-sm text-gray-500">For professional organizations</div>
              </Link>
            </div>
          </div>
        )}
      </div>

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

interface MobileNavLinksProps {
  onClose: () => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ onClose }) => {
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);

  return (
    <>
      {/* Products Accordion */}
      <div>
        <button
          onClick={() => setIsProductsExpanded(!isProductsExpanded)}
          className="w-full text-left text-primary font-medium hover:text-secondary transition-colors duration-300 flex items-center justify-between"
        >
          Our Products
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsExpanded ? 'rotate-180' : ''}`} />
        </button>

        {isProductsExpanded && (
          <div className="mt-2 ml-4 space-y-2">
            <Link
              to="/products/teamops"
              onClick={onClose}
              className="block py-2 text-primary hover:text-secondary transition-colors duration-200"
            >
              <div className="font-medium">TeamOps</div>
              <div className="text-sm text-gray-500">For youth & amateur teams</div>
            </Link>
            <Link
              to="/products/proinvest-ecosystem"
              onClick={onClose}
              className="block py-2 text-primary hover:text-secondary transition-colors duration-200"
            >
              <div className="font-medium">ProInvest Ecosystem</div>
              <div className="text-sm text-gray-500">For professional organizations</div>
            </Link>
          </div>
        )}
      </div>

      <Link
        to="/about"
        onClick={onClose}
        className="text-primary font-medium hover:text-secondary transition-colors duration-300"
      >
        About
      </Link>
      <Link
        to="/contact"
        onClick={onClose}
        className="text-primary font-medium hover:text-secondary transition-colors duration-300"
      >
        Contact Us
      </Link>
    </>
  );
};

export default Navbar;
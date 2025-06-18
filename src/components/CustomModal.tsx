import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Send, X } from 'lucide-react';    // Changed icon from Mail to Send

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  contactPath: string; // Changed from contactEmail to contactPath
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, contactPath, children }) => {
  // Effect to handle 'Escape' key press for closing the modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) {
    return null;
  }

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-[#17242C] p-8 text-left align-middle text-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold leading-6 text-white">{title}</h3>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Modal Body Content */}
        <div className="mt-6 text-gray-300">
          {children}
        </div>

        {/* Modal Footer/CTA Button - UPDATED TO USE LINK */}
        <div className="mt-8">
          <a
            href={contactPath}
            onClick={onClose} // Close modal on click before navigating
            className="inline-flex w-full justify-center items-center gap-3 rounded-xl bg-gradient-to-r from-[#00B88A] to-[#008C8D] px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Send size={20} />
            Contact The Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
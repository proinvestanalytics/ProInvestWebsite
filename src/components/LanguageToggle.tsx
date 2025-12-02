import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  isMobile?: boolean;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', isMobile = false }) => {
  const { i18n, t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = i18n.language?.startsWith('fr') ? 'fr' : 'en';

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'fr', label: 'Français', short: 'FR' },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    // Mobile: Simple horizontal buttons
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Globe className="w-4 h-4 text-primary" />
        <div className="flex items-center gap-1">
          {languages.map((lang, index) => (
            <React.Fragment key={lang.code}>
              <button
                onClick={() => changeLanguage(lang.code)}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors duration-200 ${
                  currentLang === lang.code
                    ? 'text-secondary font-semibold'
                    : 'text-primary hover:text-secondary'
                }`}
              >
                {lang.short}
              </button>
              {index < languages.length - 1 && (
                <span className="text-gray-300">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  // Desktop: Dropdown with globe icon
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 text-primary font-medium hover:text-secondary transition-colors duration-300 rounded-lg hover:bg-gray-50"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm">{currentLang.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-1 min-w-[140px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-200 flex items-center justify-between ${
                currentLang === lang.code
                  ? 'bg-gray-50 text-secondary font-semibold'
                  : 'text-primary hover:bg-gray-50 hover:text-secondary'
              }`}
            >
              <span>{lang.label}</span>
              <span className="text-xs text-gray-400">{lang.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;

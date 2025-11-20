import React from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  onNavClick: (category: string) => void;
  activeCategory: string;
  isFooter?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeCategory, isFooter = false }) => {
  return (
    <nav className={`w-full bg-brand-primary text-white py-3 px-4 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm font-bold shadow-sm ${isFooter ? 'mt-auto' : 'sticky top-0 z-50'}`}>
      {NAV_ITEMS.map((item, index) => (
        <React.Fragment key={item.value}>
          {item.external ? (
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-secondary transition-colors duration-200"
            >
              {item.label}
            </a>
          ) : (
            <button
              onClick={() => onNavClick(item.value)}
              className={`hover:text-brand-secondary transition-colors duration-200 uppercase ${activeCategory === item.value ? 'text-brand-secondary underline decoration-2 underline-offset-4' : ''}`}
            >
              {item.label}
            </button>
          )}
          {index < NAV_ITEMS.length - 1 && (
            <span className="hidden md:inline text-white/50">|</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
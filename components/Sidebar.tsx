import React from 'react';
import { SOCIAL_LINKS, AFFILIATE_PARTNERS } from '../constants';
import { AiWidget } from './AiWidget';

export const Sidebar: React.FC = () => {
  return (
    <>
      {/* AI Widget - Top Priority */}
      <AiWidget />

      {/* Social Icons Widget */}
      <div className="bg-brand-widget p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-brand-primary border-b-2 border-brand-primary pb-2 mb-4 uppercase">
          Connect With Us
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-3 justify-items-center">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow text-brand-link hover:text-brand-primary hover:scale-110 hover:shadow-md transition-all duration-300"
              aria-label={link.platform}
              title={link.platform}
            >
              <i className={`${link.iconClass} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Affiliate Partners Widget */}
      <div className="bg-brand-widget p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-brand-primary border-b-2 border-brand-primary pb-2 mb-4 uppercase">
          Shopping Partners
        </h2>
        <div className="flex flex-col gap-3">
            {AFFILIATE_PARTNERS.map(partner => (
                <a 
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded shadow-sm hover:shadow-md hover:bg-brand-bg transition-all group"
                >
                    <div className="w-8 h-8 flex items-center justify-center bg-brand-primary/10 rounded-full text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <i className={partner.iconClass}></i>
                    </div>
                    <span className="font-bold text-brand-secondary">{partner.name}</span>
                    <i className="fas fa-external-link-alt ml-auto text-xs text-gray-400"></i>
                </a>
            ))}
        </div>
        <div className="text-xs text-gray-500 italic text-center mt-4 border-t border-gray-200 pt-2">
          Cabadokas partners with these leading platforms to bring you the best in health, beauty, and wellness. We may earn a commission from qualifying purchases.
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-brand-widget p-6 rounded-lg shadow-sm">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search Cabadokas..." 
            className="w-full p-2 pr-10 border border-gray-300 rounded text-sm focus:outline-none focus:border-brand-primary"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Contact Form Widget */}
      <div className="bg-brand-widget p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-brand-primary border-b-2 border-brand-primary pb-2 mb-4 uppercase">
          Contact Us
        </h2>
        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" className="w-full p-2 text-sm border border-gray-300 rounded" />
          <input type="email" placeholder="Email *" className="w-full p-2 text-sm border border-gray-300 rounded" />
          <textarea rows={4} placeholder="Message *" className="w-full p-2 text-sm border border-gray-300 rounded"></textarea>
          <button className="bg-brand-secondary text-white py-2 px-4 rounded text-sm font-bold hover:bg-brand-primary transition-colors self-start">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { SOCIAL_LINKS, AFFILIATE_PARTNERS } from '../constants';
import { AiWidget } from './AiWidget';
import { GoogleAd } from './GoogleAd';
import { AudioPlayer } from './AudioPlayer';

export const Sidebar: React.FC = () => {
  // Visitor Counter Logic
  const [visitorCount, setVisitorCount] = useState(1245892);
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Deal Magnet Logic
  const [magnetInput, setMagnetInput] = useState('');
  const [magnetResult, setMagnetResult] = useState<React.ReactNode | null>(null);

  const handleMagnetSearch = () => {
    const val = magnetInput.toLowerCase();
    if (val.includes('makeup') || val.includes('face') || val.includes('lip')) {
      setMagnetResult(
        <span>
          Found 50% OFF at Sephora! <a href="https://www.sephora.com" target="_blank" rel="noreferrer" className="underline text-brand-primary font-bold bg-white px-1 rounded">Click Here</a>
        </span>
      );
    } else {
      setMagnetResult(
        <span>
          Searching Amazon for "{magnetInput}"... <a href="https://amazon.com" target="_blank" rel="noreferrer" className="underline text-brand-primary font-bold bg-white px-1 rounded">See Results</a>
        </span>
      );
    }
  };

  // Contact Form Logic
  const [contactForm, setContactForm] = useState({ name: '', subject: '', message: '' });
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.message) {
        alert("Please write a message");
        return;
    }
    const body = `From: ${contactForm.name}\n\n${contactForm.message}`;
    const mailtoLink = `mailto:cabadokas@zohomail.com?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* VISITOR COUNTER (Live Traffic) */}
      <div className="bg-brand-secondary text-[#0f0] font-mono p-4 rounded-lg shadow-sm mb-2 text-center border border-gray-700">
        <div className="text-xs uppercase text-gray-400 mb-1 tracking-wider">Live Traffic</div>
        <div className="text-2xl font-bold tracking-widest flex justify-center items-center gap-3">
            <i className="fas fa-users animate-pulse text-sm"></i>
            <span>{visitorCount.toLocaleString()}</span>
        </div>
      </div>

      {/* Audio Player - Zen Music */}
      <AudioPlayer />

      {/* AI Widget - Top Priority */}
      <AiWidget />

      {/* SMART DEAL MAGNET (Buyer Tool) */}
      <div className="bg-[#2c3e50] text-white p-6 rounded-lg shadow-sm border-2 border-brand-primary relative overflow-hidden">
         <div className="font-bold mb-2 uppercase flex items-center gap-2">
            <i className="fas fa-magnet text-brand-primary"></i> Smart Deal Finder
         </div>
         <p className="text-xs text-gray-300 mb-3">Type what you want to buy (e.g. Lipstick, Diet Plan)</p>
         <div className="flex gap-2 mb-3">
            <input 
                type="text" 
                value={magnetInput}
                onChange={(e) => setMagnetInput(e.target.value)}
                placeholder="e.g. Mascara..."
                className="w-full p-2 text-black text-sm rounded focus:outline-none"
            />
         </div>
         <button 
            onClick={handleMagnetSearch}
            className="w-full bg-brand-primary hover:bg-brand-link text-white font-bold py-2 px-4 rounded transition-colors text-sm"
         >
            SEARCH DEALS
         </button>
         {magnetResult && (
            <div className="mt-3 p-2 bg-white/10 rounded text-xs text-[#ffeb3b] font-bold border border-white/20 animate-fade-in">
                {magnetResult}
            </div>
         )}
      </div>
      
      {/* 💰 MONETIZATION HUB (High Paying Partners) */}
      <div className="bg-white border-2 border-brand-primary/20 p-6 rounded-lg shadow-md animate-fade-in">
        <h2 className="text-lg font-bold text-brand-primary border-b-2 border-brand-primary pb-2 mb-4 uppercase flex items-center gap-2">
          <i className="fas fa-sack-dollar"></i> Earn Money Here
        </h2>
        <p className="text-xs text-gray-600 mb-4">
            To earn high revenue from Ads & Music, click below to sign up with these premium networks:
        </p>
        <div className="flex flex-col gap-3">
            <a 
                href="https://www.media.net/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded font-bold hover:bg-blue-100 transition-colors"
            >
                <span>Media.net (High Pay)</span>
                <i className="fas fa-external-link-alt"></i>
            </a>
            <a 
                href="https://propellerads.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-indigo-50 border border-indigo-200 text-indigo-700 px-4 py-3 rounded font-bold hover:bg-indigo-100 transition-colors"
            >
                <span>PropellerAds (CPM)</span>
                <i className="fas fa-external-link-alt"></i>
            </a>
            <a 
                href="https://studio.youtube.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded font-bold hover:bg-red-100 transition-colors"
            >
                <span>Monetize Music (YT)</span>
                <i className="fas fa-play-circle"></i>
            </a>
        </div>
      </div>

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
              className={`w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:text-brand-primary hover:scale-110 hover:shadow-md transition-all duration-300 ${link.color ? link.color : 'text-brand-link'}`}
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

      {/* Contact Form Widget (Zoho) */}
      <div className="bg-brand-widget p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-brand-primary border-b-2 border-brand-primary pb-2 mb-4 uppercase">
          Contact Us
        </h2>
        <form className="flex flex-col gap-3" onSubmit={handleContactSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-2 text-sm border border-gray-300 rounded"
            value={contactForm.name}
            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
          />
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full p-2 text-sm border border-gray-300 rounded"
            value={contactForm.subject}
            onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
          />
          <textarea 
            rows={4} 
            placeholder="Message *" 
            className="w-full p-2 text-sm border border-gray-300 rounded"
            value={contactForm.message}
            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
          ></textarea>
          <button type="submit" className="bg-brand-secondary text-white py-2 px-4 rounded text-sm font-bold hover:bg-brand-primary transition-colors self-start w-full">
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* AdSense Ad Unit - MOVED TO BOTTOM */}
      <div className="min-h-[0px]">
        <GoogleAd className="w-full" />
      </div>
    </>
  );
};

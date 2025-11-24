
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

  // Deal Magnet Logic (Internal Keywords)
  const [magnetInput, setMagnetInput] = useState('');
  const [magnetResult, setMagnetResult] = useState<React.ReactNode | null>(null);

  const handleMagnetSearch = () => {
    const val = magnetInput.toLowerCase();
    if (val.includes('makeup') || val.includes('face') || val.includes('lip')) {
      setMagnetResult(
        <span>Found 50% OFF at Sephora! <a href="https://www.sephora.com" target="_blank" rel="noreferrer" className="underline text-brand-primary font-bold bg-white px-1 rounded">Click Here</a></span>
      );
    } else if (val.includes('bitcoin') || val.includes('usdt') || val.includes('crypto')) {
      setMagnetResult(
        <span>Best Crypto Wallet Deals: <a href="https://www.clickbank.com" target="_blank" rel="noreferrer" className="underline text-brand-primary font-bold bg-white px-1 rounded">View Offers</a></span>
      );
    } else if (val.includes('money') || val.includes('work')) {
      setMagnetResult(
        <span>High Income Skills Training: <a href="https://www.digistore24.com/" target="_blank" rel="noreferrer" className="underline text-brand-primary font-bold bg-white px-1 rounded">Start Now</a></span>
      );
    } else {
      setMagnetResult(
        <span>Searching Amazon for "{magnetInput}"... <a href="https://amazon.com" target="_blank" rel="noreferrer" className="underline text-brand-primary font-bold bg-white px-1 rounded">See Results</a></span>
      );
    }
  };

  // Wikipedia Search
  const [wikiSearch, setWikiSearch] = useState('');
  const handleWikiSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://en.wikipedia.org/wiki/${encodeURIComponent(wikiSearch)}`, '_blank');
  };

  // Contact Form Logic
  const [contactForm, setContactForm] = useState({ name: '', subject: '', message: '' });
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `From: ${contactForm.name}\n\n${contactForm.message}`;
    const mailtoLink = `mailto:cabadokas@zohomail.com?subject=${encodeURIComponent(contactForm.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* GOOGLE TRANSLATE PLACEHOLDER */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-2 border border-gray-200 text-center">
        <div className="text-xs font-bold text-gray-400 mb-2">TRANSLATE SITE</div>
        <div id="google_translate_element"></div>
        {/* Script usually injected in index.html, this is visual placeholder for React */}
        <div className="text-xs text-gray-400 italic">Select Language</div>
      </div>

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
         <p className="text-xs text-gray-300 mb-3">Type product or keyword (e.g. Lipstick, Bitcoin)...</p>
         <div className="flex gap-2 mb-3">
            <input 
                type="text" 
                value={magnetInput}
                onChange={(e) => setMagnetInput(e.target.value)}
                placeholder="Search Deals..."
                className="w-full p-2 text-black text-sm rounded focus:outline-none"
            />
         </div>
         <button 
            onClick={handleMagnetSearch}
            className="w-full bg-brand-primary hover:bg-brand-link text-white font-bold py-2 px-4 rounded transition-colors text-sm"
         >
            SEARCH
         </button>
         {magnetResult && (
            <div className="mt-3 p-2 bg-white/10 rounded text-xs text-[#ffeb3b] font-bold border border-white/20 animate-fade-in">
                {magnetResult}
            </div>
         )}
      </div>

      {/* WIKIPEDIA SEARCH */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
         <div className="font-bold text-brand-secondary mb-2 text-sm flex items-center gap-2">
            <i className="fab fa-wikipedia-w"></i> Wikipedia Search
         </div>
         <form onSubmit={handleWikiSearch} className="flex gap-2">
            <input 
                type="text" 
                value={wikiSearch} 
                onChange={(e) => setWikiSearch(e.target.value)}
                className="w-full p-1 border rounded text-sm"
                placeholder="Search Wiki..."
            />
            <button type="submit" className="bg-gray-200 px-3 rounded hover:bg-gray-300">
                <i className="fas fa-search"></i>
            </button>
         </form>
      </div>

      {/* Social Icons Widget */}
      <div className="bg-brand-widget p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-brand-primary border-b-2 border-brand-primary pb-2 mb-4 uppercase">
          Connect With Us
        </h2>
        <div className="grid grid-cols-4 gap-3 justify-items-center">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:scale-110 transition-all duration-300"
              style={{ color: link.hexColor || '#e91e63' }}
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
        <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto pr-2">
            {AFFILIATE_PARTNERS.map(partner => (
                <a 
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 bg-white rounded shadow-sm hover:shadow-md hover:bg-brand-bg transition-all group"
                >
                    <div className="w-6 h-6 flex items-center justify-center bg-brand-primary/10 rounded-full text-brand-primary text-xs">
                        <i className={partner.iconClass}></i>
                    </div>
                    <span className="font-bold text-brand-secondary text-sm">{partner.name}</span>
                    <i className="fas fa-external-link-alt ml-auto text-[10px] text-gray-400"></i>
                </a>
            ))}
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
            placeholder="Subject" 
            className="w-full p-2 text-sm border border-gray-300 rounded font-bold"
            value={contactForm.subject}
            onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
          />
          <input 
            type="text" 
            placeholder="Your Email" 
            className="w-full p-2 text-sm border border-gray-300 rounded"
            value={contactForm.name} // Using name field for email input visual
            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
          />
          <textarea 
            rows={4} 
            placeholder="Message" 
            className="w-full p-2 text-sm border border-gray-300 rounded"
            value={contactForm.message}
            onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
          ></textarea>
          <button type="submit" className="bg-brand-secondary text-white py-2 px-4 rounded text-sm font-bold hover:bg-brand-primary transition-colors w-full">
            SEND MESSAGE
          </button>
        </form>
      </div>

      <div className="min-h-[0px]">
        <GoogleAd className="w-full" />
      </div>
    </>
  );
};


import React, { useEffect, useRef } from 'react';
import { ADSENSE_CLIENT_ID } from '../constants';

interface GoogleAdProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
}

export const GoogleAd: React.FC<GoogleAdProps> = ({ slot, format = 'auto', className = '' }) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Delay the push to ensure the DOM layout is calculated (fixes availableWidth=0 error)
    const timer = setTimeout(() => {
      if (adRef.current && adRef.current.offsetWidth > 0) {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense error:", e);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!ADSENSE_CLIENT_ID || ADSENSE_CLIENT_ID.includes("XX")) {
    return (
      <div className={`bg-gray-100 border border-dashed border-gray-300 p-4 text-center text-gray-500 text-xs ${className}`}>
        AdSense Placeholder<br/>(Update ID in constants.ts)
      </div>
    );
  }

  return (
    <div className={`w-full my-4 flex flex-col items-center justify-center overflow-hidden ${className}`}>
      <span className="text-[10px] text-gray-300 uppercase tracking-widest mb-1">Advertisement</span>
      <ins className="adsbygoogle"
           ref={adRef}
           style={{ display: 'block', minHeight: '100px', width: '100%', minWidth: '250px' }}
           data-ad-client={ADSENSE_CLIENT_ID}
           data-ad-slot={slot}
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
    </div>
  );
};

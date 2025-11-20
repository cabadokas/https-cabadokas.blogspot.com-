import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white p-6 text-center mt-auto">
      <div className="mb-4">
        <h2 className="text-brand-link text-lg font-bold uppercase mb-1">Cabadokas Copyright</h2>
      </div>
      <div className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
        <p className="text-brand-link font-medium mb-2">
          Copyright@{currentYear} reserved by Cabadokas.
        </p>
        <p className="text-gray-400 text-xs">
          Anyone who attempts to misuse any image, video, or affiliate link found on this blog will be subject to legal action.
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-4 text-gray-500 text-xs">
          <a href="#" className="hover:text-brand-link">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-brand-link">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-brand-link">Contact</a>
      </div>
    </footer>
  );
};
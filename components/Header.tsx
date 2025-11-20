import React from 'react';

interface HeaderProps {
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  // URL from the provided XML
  const LOGO_URL = "https://blogger.googleusercontent.com/img/a/AVvXsEhpggXG6-9uyu4dKimws4dQnA99iezltoaA0C6t9Y6p2mfgyFrnLvZIawkL7qX6rX8J-qYrHxkX75A-m8_9_fr-iDxo4pkc-k4Oi9P3V-WobJiZwy3gq2_Wq_tzOhN5vjZ-7-__bylhEe7Ca7jdmlasZ3gzJDyaLWxTiwVrI5GunadQChEPV-UwM9fSxRfU=s567";

  return (
    <header className="w-full bg-brand-container py-6 px-4 border-b border-gray-100">
      <div 
        className="cursor-pointer flex flex-col items-center justify-center w-full"
        onClick={onLogoClick}
      >
        <div className="max-w-[567px] w-full">
            <img 
                src={LOGO_URL} 
                alt="Cabadokas" 
                className="w-full h-auto mx-auto object-contain"
                style={{ maxHeight: '170px' }}
                onError={(e) => {
                    // Fallback if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('text-center');
                }}
            />
            {/* Fallback Text */}
            <h1 className="hidden text-4xl md:text-5xl font-bold text-brand-primary tracking-tight hover:opacity-90 transition-opacity text-center">
                Cabadokas
            </h1>
        </div>
        <p className="text-gray-500 text-sm md:text-base uppercase tracking-widest mt-2 text-center">
          Health • Beauty • Wellness • Lifestyle
        </p>
      </div>
    </header>
  );
};
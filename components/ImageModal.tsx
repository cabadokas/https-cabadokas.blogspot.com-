import React from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in cursor-zoom-out"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl z-50"
        onClick={onClose}
      >
        &times;
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-full object-contain rounded shadow-2xl"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
};
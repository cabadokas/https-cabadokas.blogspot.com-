import React, { useState, useRef, useEffect } from 'react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Cleanup function to pause audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        // Audio.play() returns a promise. We must wait for it or catch errors
        // to prevent "The play() request was interrupted by a call to pause()"
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Audio playback was interrupted or failed:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="bg-brand-primary text-white p-4 rounded-lg shadow-md mb-6 border border-white/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-white text-brand-primary flex items-center justify-center ${isPlaying ? 'animate-pulse' : ''}`}>
            <i className="fas fa-spa"></i>
          </div>
          <div>
            <h3 className="font-bold text-sm">Cabadokas Radio</h3>
            <p className="text-xs text-brand-bg opacity-90">Calming Beauty & Spa Music</p>
          </div>
        </div>
        
        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-brand-primary transition-all shadow-sm"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} pl-[1px]`}></i>
        </button>
      </div>

      {/* Link to YouTube Channel */}
      <div className="border-t border-white/20 pt-2 mt-2 text-center">
        <a 
          href="https://www.youtube.com/@Cabadokas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs text-white/90 hover:text-white hover:underline flex items-center justify-center gap-2"
        >
          <i className="fab fa-youtube"></i>
          <span>More on our Music Channel</span>
        </a>
      </div>

      <audio ref={audioRef} loop>
        {/* Royalty Free "Beauty Flow" / Spa Music */}
        <source src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=beauty-flow-113035.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '../types';
import { APP_NAME } from '../constants';
import { GoogleAd } from './GoogleAd';
import { ImageModal } from './ImageModal';

interface PostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  const shareUrl = post.link || window.location.href;
  const shareText = post.title;

  const shareLinks = [
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-facebook-f', color: '#1877F2' },
    { name: 'X', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-x-twitter', color: '#000000' },
    { name: 'Pinterest', url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-pinterest-p', color: '#BD081C' },
    { name: 'WhatsApp', url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, icon: 'fa-brands fa-whatsapp', color: '#25D366' },
    { name: 'Reddit', url: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-reddit', color: '#FF4500' },
    { name: 'Telegram', url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-telegram', color: '#0088cc' },
    { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-linkedin-in', color: '#0A66C2' },
    { name: 'Quora', url: `https://www.quora.com/share?url=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-quora', color: '#B92B27' },
    { name: 'Discord', url: '#', icon: 'fa-brands fa-discord', color: '#5865F2' },
    { name: 'Snapchat', url: '#', icon: 'fa-brands fa-snapchat', color: '#FFFC00' },
    { name: 'YouTube', url: '#', icon: 'fa-brands fa-youtube', color: '#FF0000' },
    { name: 'TikTok', url: '#', icon: 'fa-brands fa-tiktok', color: '#000000' },
    { name: 'Instagram', url: '#', icon: 'fa-brands fa-instagram', color: '#E4405F' },
    { name: 'Behance', url: '#', icon: 'fa-brands fa-behance', color: '#1769FF' },
    { name: 'Dribbble', url: '#', icon: 'fa-brands fa-dribbble', color: '#EA4C89' },
    { name: 'Threads', url: '#', icon: 'fa-brands fa-threads', color: '#000000' },
    { name: 'Twitch', url: '#', icon: 'fa-brands fa-twitch', color: '#9146FF' },
    { name: 'Email', url: `mailto:?body=${encodeURIComponent(shareUrl)}`, icon: 'fa-solid fa-envelope', color: '#666' },
    { name: 'Copy', url: '#', icon: 'fa-solid fa-link', color: '#333' },
  ];

  return (
    <article className="bg-white animate-fade-in">
      <Helmet>
        <title>{post.title} | Cabadokas</title>
        <meta property="og:image" content={post.imageUrl} />
      </Helmet>

      {zoomImage && (
        <ImageModal src={zoomImage} alt="Zoom" onClose={() => setZoomImage(null)} />
      )}

      <button onClick={onBack} className="mb-4 text-sm text-gray-500 hover:text-brand-primary">
        <i className="fas fa-arrow-left"></i> Back
      </button>

      <header className="mb-6">
        <span className="bg-brand-bg text-brand-primary text-xs font-bold px-2 py-1 rounded uppercase">
          {post.category}
        </span>
        <h1 className="text-3xl font-bold text-brand-secondary my-4">{post.title}</h1>
      </header>

      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full max-h-[500px] object-cover rounded-lg mb-8 shadow-sm cursor-zoom-in"
        onClick={() => setZoomImage(post.imageUrl)}
      />

      <div className="bg-gray-50 p-6 rounded-lg border mb-8 text-center">
        <h4 className="text-sm font-bold mb-4 uppercase">Share This Story</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-80 transition-all shadow-sm"
              style={{ backgroundColor: link.color }}
              title={link.name}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div 
        className="prose prose-pink max-w-none text-gray-700 video-container"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <GoogleAd className="my-8" />
    </article>
  );
};

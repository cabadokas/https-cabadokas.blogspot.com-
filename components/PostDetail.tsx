
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
  const [copySuccess, setCopySuccess] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  // Clean summary for meta description
  const metaDescription = post.summary.replace(/"/g, '&quot;').substring(0, 160);

  // Structured Data (JSON-LD) for Blog Post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [post.imageUrl],
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": "https://cabadokas.netlify.app/" 
    }],
    "publisher": {
      "@type": "Organization",
      "name": APP_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": "https://blogger.googleusercontent.com/img/a/AVvXsEhpggXG6-9uyu4dKimws4dQnA99iezltoaA0C6t9Y6p2mfgyFrnLvZIawkL7qX6rX8J-qYrHxkX75A-m8_9_fr-iDxo4pkc-k4Oi9P3V-WobJiZwy3gq2_Wq_tzOhN5vjZ-7-__bylhEe7Ca7jdmlasZ3gzJDyaLWxTiwVrI5GunadQChEPV-UwM9fSxRfU=s567"
      }
    },
    "description": metaDescription,
    "articleBody": post.content.replace(/<[^>]+>/g, ' ').substring(0, 5000)
  };

  const shareUrl = post.link || window.location.href;
  const shareText = post.title;

  const shareLinks = [
    { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-facebook-f', color: 'bg-[#1877F2]' },
    { name: 'X (Twitter)', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, icon: 'fa-brands fa-x-twitter', color: 'bg-black' },
    { name: 'Reddit', url: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`, icon: 'fa-brands fa-reddit', color: 'bg-[#FF4500]' },
    { name: 'Pinterest', url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(post.imageUrl)}&description=${encodeURIComponent(shareText)}`, icon: 'fa-brands fa-pinterest-p', color: 'bg-[#BD081C]' },
    { name: 'WhatsApp', url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, icon: 'fa-brands fa-whatsapp', color: 'bg-[#25D366]' },
    { name: 'LinkedIn', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, icon: 'fa-brands fa-linkedin-in', color: 'bg-[#0A66C2]' },
    { name: 'Threads', url: `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, icon: 'fa-brands fa-threads', color: 'bg-black' },
    { name: 'Telegram', url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`, icon: 'fa-brands fa-telegram', color: 'bg-[#0088cc]' },
    { name: 'Quora', url: `https://www.quora.com/share?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`, icon: 'fa-brands fa-quora', color: 'bg-[#B92B27]' },
    { name: 'Email', url: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent('Check this out: ' + shareUrl)}`, icon: 'fa-solid fa-envelope', color: 'bg-gray-600' },
  ];

  // Function to smart copy content for social media
  const handleSmartCopy = () => {
    const hashtags = `#Cabadokas #${post.category.replace(' ', '')} #Wellness #Beauty`;
    const caption = `✨ NEW POST: ${post.title} ✨\n\n${post.summary}\n\n👇 Read the full story here:\n${shareUrl}\n\n${hashtags}`;
    
    navigator.clipboard.writeText(caption).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
    });
  };

  const SmartCopyButton = () => (
    <div className="bg-brand-bg p-4 rounded-lg border border-brand-primary/20 my-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
      <div className="text-center sm:text-left">
         <h4 className="font-bold text-brand-primary text-sm uppercase"><i className="fas fa-share-nodes mr-2"></i> Share to 18+ Sites</h4>
         <p className="text-xs text-gray-600">Copy caption & link with one click!</p>
      </div>
      <button 
        onClick={handleSmartCopy}
        className="bg-brand-primary text-white text-sm font-bold py-2 px-6 rounded-full shadow hover:bg-brand-link hover:scale-105 transition-all flex items-center gap-2 whitespace-nowrap"
      >
        {copySuccess ? <i className="fas fa-check"></i> : <i className="fas fa-copy"></i>}
        {copySuccess ? "COPIED!" : "COPY CAPTION"}
      </button>
    </div>
  );

  return (
    <article className="bg-white animate-fade-in">
      <Helmet>
        <title>{post.title} | Cabadokas</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.imageUrl} />
        <meta property="og:url" content={post.link || window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      {zoomImage && (
        <ImageModal 
            src={zoomImage} 
            alt="Zoomed View" 
            onClose={() => setZoomImage(null)} 
        />
      )}

      <button 
        onClick={onBack}
        className="mb-4 text-sm text-gray-500 hover:text-brand-primary flex items-center gap-1"
      >
        <i className="fas fa-arrow-left"></i> Back to Posts
      </button>

      {/* Smart Copy Button at TOP */}
      <SmartCopyButton />

      <header className="mb-6">
        <div className="flex gap-2 mb-3">
           <span className="bg-brand-bg text-brand-primary text-xs font-bold px-2 py-1 rounded uppercase">
            {post.category}
           </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-sm text-gray-500 border-b border-gray-100 pb-6">
            <span className="font-bold text-brand-primary mr-2">{post.author}</span>
            <span className="mr-2">•</span>
            <span>{post.date}</span>
        </div>
      </header>

      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full max-h-[500px] object-cover rounded-lg mb-8 shadow-sm cursor-zoom-in"
        onClick={() => setZoomImage(post.imageUrl)}
      />

      <div 
        className="prose prose-pink max-w-none text-gray-700 video-container"
        dangerouslySetInnerHTML={{ __html: post.content }}
        onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
                setZoomImage((target as HTMLImageElement).src);
            }
        }}
      />

      {/* Google AdSense Unit */}
      <GoogleAd className="my-8" />
      
      <div className="mt-10 pt-6 border-t border-gray-100">
         <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase">Tags</h4>
         <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded hover:bg-brand-primary hover:text-white transition-colors cursor-pointer">
                    #{tag}
                </span>
            ))}
         </div>
      </div>

      {/* SHARE BUTTONS SECTION (Detailed) */}
      <div className="mt-8 bg-brand-bg p-6 rounded-lg border border-brand-primary/10">
        <h4 className="text-base font-bold text-brand-secondary mb-4 uppercase text-center">
            Fast Share to 18 Sites
        </h4>
        
        {/* Smart Copy Button at BOTTOM */}
        <div className="flex justify-center mb-6">
             <button 
                onClick={handleSmartCopy}
                className="bg-brand-primary text-white text-sm font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-link hover:scale-105 transition-all flex items-center gap-2"
            >
                {copySuccess ? <i className="fas fa-check"></i> : <i className="fas fa-copy"></i>}
                {copySuccess ? "COPIED!" : "COPY SMART CAPTION"}
            </button>
        </div>
        <p className="text-center text-xs text-gray-500 mb-4">
            1. Click <strong>Copy Smart Caption</strong> above.<br/>
            2. Click a social icon below.<br/>
            3. Paste and Post!
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 hover:-translate-y-1 transition-all shadow-md`}
              title={`Share on ${link.name}`}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 bg-white rounded-lg flex items-center gap-4 border border-gray-100 shadow-sm">
        <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
            {post.author.charAt(0)}
        </div>
        <div>
            <h4 className="font-bold text-brand-secondary">About {post.author}</h4>
            <p className="text-sm text-gray-600">Passionate about helping women achieve their health and beauty goals through natural tips and honest reviews.</p>
        </div>
      </div>
    </article>
  );
};

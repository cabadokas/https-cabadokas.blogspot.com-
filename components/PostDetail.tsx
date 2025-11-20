import React from 'react';
import { BlogPost } from '../types';

interface PostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  return (
    <article className="bg-white animate-fade-in">
      <button 
        onClick={onBack}
        className="mb-4 text-sm text-gray-500 hover:text-brand-primary flex items-center gap-1"
      >
        <i className="fas fa-arrow-left"></i> Back to Posts
      </button>

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
        className="w-full max-h-[500px] object-cover rounded-lg mb-8 shadow-sm"
      />

      {/* Content Injection - safe for mock data, use sanitization in prod */}
      <div 
        className="prose prose-pink max-w-none text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
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

      <div className="mt-10 p-6 bg-brand-bg rounded-lg flex items-center gap-4 border border-brand-primary/10">
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
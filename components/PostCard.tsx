import React from 'react';
import { BlogPost } from '../types';

interface PostCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <article className="bg-brand-container border border-gray-200 rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div 
        className="h-48 sm:h-64 overflow-hidden cursor-pointer relative group"
        onClick={() => onClick(post)}
      >
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2 bg-brand-primary text-white text-xs font-bold px-2 py-1 rounded uppercase shadow">
            {post.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-brand-secondary mb-2 leading-tight hover:text-brand-primary cursor-pointer transition-colors" onClick={() => onClick(post)}>
          {post.title}
        </h3>
        <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
            <span><i className="far fa-calendar-alt mr-1"></i>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.summary}
        </p>
        <button 
          onClick={() => onClick(post)}
          className="self-start text-brand-link font-bold text-sm hover:text-brand-primary border-b-2 border-transparent hover:border-brand-primary transition-all"
        >
          READ MORE <i className="fas fa-arrow-right ml-1 text-xs"></i>
        </button>
      </div>
    </article>
  );
};
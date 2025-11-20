import React from 'react';
import { BlogPost } from '../types';

interface FeaturedPostProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, onClick }) => {
  return (
    <div className="mb-8 bg-brand-container rounded-lg shadow-sm overflow-hidden group border border-gray-100">
      <div className="relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden" onClick={() => onClick(post)}>
        <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full md:w-3/4">
            <span className="bg-brand-link text-xs font-bold px-2 py-1 rounded uppercase mb-2 inline-block">Featured</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 leading-tight drop-shadow-md">{post.title}</h2>
            <p className="hidden md:block text-gray-200 mb-4 drop-shadow-sm">{post.summary}</p>
            <button className="bg-white text-brand-secondary hover:bg-brand-primary hover:text-white transition-colors px-4 py-2 rounded text-sm font-bold">
                READ STORY
            </button>
        </div>
      </div>
    </div>
  );
};
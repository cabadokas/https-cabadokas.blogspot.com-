import React from 'react';
import { BlogPost } from '../types';
import { PostCard } from './PostCard';
import { FeaturedPost } from './FeaturedPost';

interface PostListProps {
  posts: BlogPost[];
  category: string;
  onPostClick: (post: BlogPost) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, category, onPostClick }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <i className="fas fa-heart-broken text-4xl mb-4 text-brand-primary/50"></i>
        <p>No posts found in {category}. Check back soon!</p>
      </div>
    );
  }

  // Separate featured post (first one) from the rest if we are on HOME
  const featuredPost = category === 'HOME' ? posts[0] : null;
  const gridPosts = category === 'HOME' ? posts.slice(1) : posts;

  return (
    <div className="w-full">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-bold text-brand-primary uppercase border-b-2 border-brand-primary pb-1 pr-4">
          {category === 'HOME' ? 'Latest Stories' : `${category} Posts`}
        </h2>
        <div className="flex-grow border-b border-gray-200 h-full ml-[-2px]"></div>
      </div>

      {featuredPost && (
        <FeaturedPost post={featuredPost} onClick={onPostClick} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gridPosts.map((post) => (
          <PostCard key={post.id} post={post} onClick={onPostClick} />
        ))}
      </div>
    </div>
  );
};
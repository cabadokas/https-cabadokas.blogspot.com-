import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { PostList } from './components/PostList';
import { PostDetail } from './components/PostDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';
import { BlogPost } from './types';
import { MOCK_POSTS } from './constants';
import { fetchBloggerPosts } from './services/bloggerService';

const App: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>('HOME');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const fetchedPosts = await fetchBloggerPosts();
      // Use mock posts if fetch returns empty (fallback) or combine them if desired
      // For now, we prioritize fetched posts, if empty use mock so the site isn't blank
      if (fetchedPosts.length > 0) {
        setPosts(fetchedPosts);
      } else {
        setPosts(MOCK_POSTS);
      }
      setLoading(false);
    };
    loadPosts();
  }, []);

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (category: string) => {
    setActivePost(null);
    setCurrentCategory(category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter posts based on category if not on HOME
  const displayPosts = currentCategory === 'HOME' || currentCategory === 'PRIVACY'
    ? posts 
    : posts.filter(p => {
        if (p.category === currentCategory) return true;
        // Also check tags if category match fails
        return p.tags.some(tag => tag.toUpperCase() === currentCategory);
    });

  return (
    <div className="min-h-screen flex flex-col items-center py-5 px-2 sm:px-5">
      <div className="w-full max-w-[1200px] bg-brand-container shadow-lg rounded-lg overflow-hidden flex flex-col">
        
        <Header onLogoClick={() => handleNavClick('HOME')} />
        
        <Navbar 
          onNavClick={handleNavClick} 
          activeCategory={activePost ? '' : currentCategory} 
        />

        <div className="flex flex-col lg:flex-row w-full p-5 gap-8">
          {/* Main Content Area */}
          <main className="w-full lg:w-[70%] flex flex-col gap-8">
            {loading ? (
              <div className="py-20 text-center text-brand-primary">
                <i className="fas fa-circle-notch fa-spin text-4xl mb-4"></i>
                <p>Syncing with Cabadokas Blog...</p>
              </div>
            ) : currentCategory === 'PRIVACY' ? (
              <PrivacyPolicy />
            ) : activePost ? (
              <PostDetail post={activePost} onBack={() => setActivePost(null)} />
            ) : (
              <PostList 
                posts={displayPosts} 
                category={currentCategory} 
                onPostClick={handlePostClick} 
              />
            )}
          </main>

          {/* Sidebar Area */}
          <aside className="w-full lg:w-[30%] flex flex-col gap-8 min-w-[280px]">
            <Sidebar />
          </aside>
        </div>

        <Navbar 
          onNavClick={handleNavClick} 
          activeCategory={activePost ? '' : currentCategory}
          isFooter={true} 
        />
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
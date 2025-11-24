import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { PostList } from './components/PostList';
import { PostDetail } from './components/PostDetail';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';
import { BlogPost } from './types';
import { MOCK_POSTS, APP_NAME, SOCIAL_LINKS } from './constants';
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

  const displayPosts = currentCategory === 'HOME' || currentCategory === 'PRIVACY'
    ? posts 
    : posts.filter(p => {
        if (p.category === currentCategory) return true;
        return p.tags.some(tag => tag.toUpperCase() === currentCategory);
    });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": APP_NAME,
    "url": "https://cabadokas.netlify.app/",
    "logo": "https://blogger.googleusercontent.com/img/a/AVvXsEhpggXG6-9uyu4dKimws4dQnA99iezltoaA0C6t9Y6p2mfgyFrnLvZIawkL7qX6rX8J-qYrHxkX75A-m8_9_fr-iDxo4pkc-k4Oi9P3V-WobJiZwy3gq2_Wq_tzOhN5vjZ-7-__bylhEe7Ca7jdmlasZ3gzJDyaLWxTiwVrI5GunadQChEPV-UwM9fSxRfU=s567",
    "sameAs": SOCIAL_LINKS.map(link => link.url),
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "cabadokas@gmail.com",
      "contactType": "customer support"
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col items-center py-5 px-2 sm:px-5">
        
        {!activePost && (
          <Helmet>
            <title>Cabadokas | Health, Beauty & Wellness</title>
            <meta name="description" content="Your ultimate destination for women's health, beauty tips, weight loss guides, and wellness nutrition. Shop top products from Amazon, Etsy, and more." />
            <meta property="og:title" content="Cabadokas | Health, Beauty & Wellness" />
            <meta property="og:description" content="Your ultimate destination for women's health, beauty tips, weight loss guides, and wellness nutrition." />
            <meta property="og:image" content="https://blogger.googleusercontent.com/img/a/AVvXsEhpggXG6-9uyu4dKimws4dQnA99iezltoaA0C6t9Y6p2mfgyFrnLvZIawkL7qX6rX8J-qYrHxkX75A-m8_9_fr-iDxo4pkc-k4Oi9P3V-WobJiZwy3gq2_Wq_tzOhN5vjZ-7-__bylhEe7Ca7jdmlasZ3gzJDyaLWxTiwVrI5GunadQChEPV-UwM9fSxRfU=s567" />
            <script type="application/ld+json">
              {JSON.stringify(organizationSchema)}
            </script>
          </Helmet>
        )}

        <div className="w-full max-w-[1200px] bg-brand-container shadow-lg rounded-lg overflow-hidden flex flex-col">
          
          <Header onLogoClick={() => handleNavClick('HOME')} />
          
          <Navbar 
            onNavClick={handleNavClick} 
            activeCategory={activePost ? '' : currentCategory} 
          />

          {/* Layout Container */}
          <div className="flex flex-col md:flex-row w-full p-5 gap-8">
            
            {/* Sidebar Area - STRICTLY LEFT (order-1 on desktop) */}
            <aside className="w-full md:w-[30%] flex flex-col gap-8 min-w-[280px] order-2 md:order-1">
              <Sidebar />
            </aside>

            {/* Main Content Area - STRICTLY RIGHT (order-2 on desktop) */}
            <main className="w-full md:w-[70%] flex flex-col gap-8 order-1 md:order-2">
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

          </div>

          <Navbar 
            onNavClick={handleNavClick} 
            activeCategory={activePost ? '' : currentCategory}
            isFooter={true} 
          />
          
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
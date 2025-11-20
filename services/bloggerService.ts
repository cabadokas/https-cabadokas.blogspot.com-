import { BlogPost } from '../types';

const BLOGGER_FEED_URL = 'https://cabadokas.blogspot.com/feeds/posts/default?alt=json';

export const fetchBloggerPosts = async (): Promise<BlogPost[]> => {
  const parseBloggerData = (data: any): BlogPost[] => {
    if (!data.feed || !data.feed.entry) {
      return [];
    }

    return data.feed.entry.map((entry: any) => {
      // Extract content
      const content = entry.content ? entry.content.$t : (entry.summary ? entry.summary.$t : '');
      
      // Extract Image
      // Default fallback from user assets if no image found
      let imageUrl = 'https://blogger.googleusercontent.com/img/a/AVvXsEhpggXG6-9uyu4dKimws4dQnA99iezltoaA0C6t9Y6p2mfgyFrnLvZIawkL7qX6rX8J-qYrHxkX75A-m8_9_fr-iDxo4pkc-k4Oi9P3V-WobJiZwy3gq2_Wq_tzOhN5vjZ-7-__bylhEe7Ca7jdmlasZ3gzJDyaLWxTiwVrI5GunadQChEPV-UwM9fSxRfU=s567'; 
      
      if (entry.media$thumbnail) {
        // Blogger usually gives s72-c (small). Change to w800 for better quality
        // We use a regex to replace any /sXX-c/ or /sXX/ part with /w800/
        imageUrl = entry.media$thumbnail.url.replace(/\/s[0-9]+(-c)?\//, '/w800/'); 
      } else {
        // Fallback: regex to find first image in HTML content
        const imgMatch = content.match(/src="([^"]+)"/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }

      // Determine Category (Labels)
      let category: any = 'LIFESTYLE';
      const categories = entry.category ? entry.category.map((c: any) => c.term) : [];
      const catStr = categories.join(' ').toUpperCase();
      
      if (catStr.includes('HEALTH')) category = 'HEALTH';
      else if (catStr.includes('BEAUTY')) category = 'BEAUTY';
      else if (catStr.includes('WEIGHT')) category = 'WEIGHT LOSS';

      return {
        id: entry.id.$t,
        title: entry.title.$t,
        summary: content.replace(/<[^>]+>/g, ' ').substring(0, 150).trim() + '...',
        content: content,
        imageUrl: imageUrl,
        date: new Date(entry.published.$t).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }),
        author: entry.author?.[0]?.name?.$t || 'Cabadokas',
        category: category,
        tags: categories,
        link: entry.link.find((l:any) => l.rel === 'alternate')?.href
      };
    });
  };

  // Strategy 1: AllOrigins 'get' (returns JSON wrapper) - robust against CORS
  // We use the 'get' endpoint which wraps the content in a JSON object { contents: "string" }
  // This avoids browser CORS issues that happen with raw content.
  try {
    const encodedUrl = encodeURIComponent(BLOGGER_FEED_URL);
    const response = await fetch(`https://api.allorigins.win/get?url=${encodedUrl}`);
    if (!response.ok) throw new Error('AllOrigins network response was not ok');
    
    const wrapper = await response.json();
    if (!wrapper.contents) throw new Error('AllOrigins no content');
    
    const data = JSON.parse(wrapper.contents);
    return parseBloggerData(data);
  } catch (error) {
    console.warn("Primary fetch strategy (AllOrigins) failed, attempting backup...", error);
  }

  // Strategy 2: CorsProxy.io (Raw transparent proxy)
  try {
    // corsproxy.io requires the full URL appended
    const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(BLOGGER_FEED_URL)}`);
    if (!response.ok) throw new Error('CorsProxy network response was not ok');
    
    const data = await response.json();
    return parseBloggerData(data);
  } catch (error) {
    console.error("All fetch strategies failed. Using mock data.", error);
    return []; // Return empty to trigger mock data fallback in App.tsx
  }
};
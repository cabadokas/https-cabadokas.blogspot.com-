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
      
      // Extract Image (look for media$thumbnail or parse content html)
      // Default fallback from user assets if no image found
      let imageUrl = 'https://blogger.googleusercontent.com/img/a/AVvXsEgpVRhIaLBKLQtSSt8SdJ8l0N_WL6UcRVQS5OfHSYQT4y6NDGwzCrI9ydkBVAViJwU9ObB1UflTuhLLbAoE2IjzWYw5_XeTFn7hnLsTWh8bDKQFhf8cCBwf3rlt8IYG1ofdFJekjAd8t7rGQR8NP38BeKQL99qTNjPZkuJMdn782x-i418w8F8iDTgtdhP=s567'; 
      
      if (entry.media$thumbnail) {
        imageUrl = entry.media$thumbnail.url.replace('s72-c', 's800'); // Upgrade quality
      } else {
        const imgMatch = content.match(/src="([^"]+)"/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }

      // Determine Category (Labels)
      let category: any = 'LIFESTYLE';
      const categories = entry.category ? entry.category.map((c: any) => c.term) : [];
      
      if (categories.some((c: string) => c.toUpperCase().includes('HEALTH'))) category = 'HEALTH';
      else if (categories.some((c: string) => c.toUpperCase().includes('BEAUTY'))) category = 'BEAUTY';
      else if (categories.some((c: string) => c.toUpperCase().includes('WEIGHT'))) category = 'WEIGHT LOSS';

      return {
        id: entry.id.$t,
        title: entry.title.$t,
        summary: content.replace(/<[^>]+>/g, '').substring(0, 150) + '...',
        content: content,
        imageUrl: imageUrl,
        date: new Date(entry.published.$t).toLocaleDateString(),
        author: entry.author?.[0]?.name?.$t || 'Cabadokas',
        category: category,
        tags: categories,
        link: entry.link.find((l:any) => l.rel === 'alternate')?.href
      };
    });
  };

  try {
    // Try direct fetch first
    const response = await fetch(BLOGGER_FEED_URL, { method: 'GET' });
    if (!response.ok) throw new Error('Direct fetch failed');
    const data = await response.json();
    return parseBloggerData(data);
  } catch (directError) {
    console.warn("Direct fetch failed, trying proxy...", directError);
    try {
      // Fallback to CORS proxy (AllOrigins)
      // We use raw output to get the JSON directly
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(BLOGGER_FEED_URL)}`;
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error('Proxy fetch failed');
      const data = await response.json();
      return parseBloggerData(data);
    } catch (proxyError) {
      console.error("All fetch attempts failed:", proxyError);
      return [];
    }
  }
};
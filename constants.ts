
import { BlogPost, SocialLink, NavItem } from './types';

export const APP_NAME = "Cabadokas";

// REPLACE THIS WITH YOUR REAL ADSENSE PUBLISHER ID
export const ADSENSE_CLIENT_ID = "ca-pub-3127419285072540"; 

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Quora', url: 'https://www.quora.com/profile/Cabadokas', iconClass: 'fa-brands fa-quora', color: 'text-[#B92B27]' },
  { platform: 'Reddit', url: 'https://www.reddit.com/r/Cabadokas/', iconClass: 'fa-brands fa-reddit', color: 'text-[#FF4500]' },
  { platform: 'X', url: 'https://x.com/Cabadokas', iconClass: 'fa-brands fa-x-twitter' },
  { platform: 'Facebook', url: 'https://www.facebook.com/Cabadokas', iconClass: 'fa-brands fa-facebook-f' },
  { platform: 'Instagram', url: 'https://www.instagram.com/Cabadokas/#', iconClass: 'fa-brands fa-instagram' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@Cabadokas', iconClass: 'fa-brands fa-tiktok' },
  { platform: 'Discord', url: 'https://discord.com/Cabadokas', iconClass: 'fa-brands fa-discord' },
  { platform: 'Snapchat', url: 'https://www.snapchat.com/@cabadokas', iconClass: 'fa-brands fa-snapchat' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@Cabadokas', iconClass: 'fa-brands fa-youtube' },
  { platform: 'WhatsApp', url: 'https://www.whatsapp.com/Cabadokas', iconClass: 'fa-brands fa-whatsapp' },
  { platform: 'Behance', url: 'https://www.behance.net/Cabadokas', iconClass: 'fa-brands fa-behance' },
  { platform: 'Threads', url: 'https://www.threads.com/Cabadokas', iconClass: 'fa-brands fa-threads' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/Cabadokas', iconClass: 'fa-brands fa-linkedin-in' },
  { platform: 'Dribbble', url: 'https://dribbble.com/Cabadokas', iconClass: 'fa-brands fa-dribbble' },
  { platform: 'Pinterest', url: 'https://www.pinterest.com/Cabadokas/', iconClass: 'fa-brands fa-pinterest-p' },
  { platform: 'Twitch', url: 'https://www.twitch.tv/Cabadokas', iconClass: 'fa-brands fa-twitch' },
  { platform: 'Telegram', url: 'https://t.me/Cabadokas', iconClass: 'fa-brands fa-telegram' },
  { platform: 'Beacons', url: 'https://beacons.ai/cabadokas', iconClass: 'fa-solid fa-link' },
];

export const AFFILIATE_PARTNERS = [
  { name: 'Amazon', url: 'https://amazon.com', iconClass: 'fa-brands fa-amazon' },
  { name: 'Digistore24', url: 'https://www.digistore24.com/', iconClass: 'fa-solid fa-cart-shopping' },
  { name: 'Etsy', url: 'https://www.etsy.com/', iconClass: 'fa-brands fa-etsy' },
  { name: 'Awin', url: 'https://www.awin.com/', iconClass: 'fa-solid fa-network-wired' },
  { name: 'ShareASale', url: 'https://www.shareasale.com/', iconClass: 'fa-solid fa-share-nodes' },
  { name: 'Sephora', url: 'https://www.sephora.com', iconClass: 'fa-solid fa-bag-shopping' },
  { name: 'Ulta Beauty', url: 'https://www.ulta.com', iconClass: 'fa-solid fa-pump-soap' },
  { name: 'ClickBank', url: 'https://www.clickbank.com', iconClass: 'fa-solid fa-money-bill-trend-up' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'VISIT OUR MAIN WEBSITE', value: 'EXTERNAL_MAIN', external: true, url: 'https://cabadokas.netlify.app/' },
  { label: 'HOME', value: 'HOME' },
  { label: 'PRIVACY POLICY', value: 'PRIVACY' },
  { label: 'HEALTH', value: 'HEALTH' },
  { label: 'BEAUTY', value: 'BEAUTY' },
  { label: 'WEIGHT LOSS', value: 'WEIGHT LOSS' },
];

// Enhanced fallback data in case fetch fails
export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to Cabadokas',
    summary: 'Your journey to health, beauty, and wellness starts here. Explore our tips for a healthier, happier you.',
    content: `
      <p>Welcome to Cabadokas! We are dedicated to providing you with the best tips on women's health, beauty, and weight loss.</p>
      <p>We partner with Amazon, Digistore24, and more to bring you the best products.</p>
      <p>Check out our latest posts for nutrition guides and skincare routines.</p>
    `,
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEhpggXG6-9uyu4dKimws4dQnA99iezltoaA0C6t9Y6p2mfgyFrnLvZIawkL7qX6rX8J-qYrHxkX75A-m8_9_fr-iDxo4pkc-k4Oi9P3V-WobJiZwy3gq2_Wq_tzOhN5vjZ-7-__bylhEe7Ca7jdmlasZ3gzJDyaLWxTiwVrI5GunadQChEPV-UwM9fSxRfU=s567',
    date: new Date().toLocaleDateString(),
    author: 'Cabadokas',
    category: 'HEALTH',
    tags: ['Welcome', 'Health'],
  },
  {
    id: '2',
    title: 'Top 10 Beauty Essentials for 2025',
    summary: 'Discover the must-have beauty products that are taking the world by storm this year. From skincare to makeup.',
    content: '<p>Discover the must-have beauty products...</p>',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=800',
    date: new Date(Date.now() - 86400000).toLocaleDateString(),
    author: 'Cabadokas',
    category: 'BEAUTY',
    tags: ['Beauty', 'Skincare'],
  },
  {
    id: '3',
    title: 'Effective Weight Loss Strategies',
    summary: 'Simple, science-backed tips to help you lose weight sustainably and keep it off.',
    content: '<p>Simple, science-backed tips...</p>',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    date: new Date(Date.now() - 172800000).toLocaleDateString(),
    author: 'Cabadokas',
    category: 'WEIGHT LOSS',
    tags: ['Weight Loss', 'Fitness'],
  }
];

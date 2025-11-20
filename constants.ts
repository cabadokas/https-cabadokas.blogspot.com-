import { BlogPost, SocialLink, NavItem } from './types';

export const APP_NAME = "Cabadokas";

export const SOCIAL_LINKS: SocialLink[] = [
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
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'VISIT OUR MAIN WEBSITE', value: 'EXTERNAL_MAIN', external: true, url: 'https://cabadokas.netlify.app/' },
  { label: 'HOME', value: 'HOME' },
  { label: 'PRIVACY POLICY', value: 'PRIVACY' },
  { label: 'HEALTH', value: 'HEALTH' },
  { label: 'BEAUTY', value: 'BEAUTY' },
  { label: 'WEIGHT LOSS', value: 'WEIGHT LOSS' },
];

// Initial fallback data in case fetch fails
export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to Cabadokas',
    summary: 'Your journey to health, beauty, and wellness starts here.',
    content: '<p>Loading latest posts from Blogger...</p>',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEhpggXG6-9uyu4dKimws4dQnA99iezltoaA0C6t9Y6p2mfgyFrnLvZIawkL7qX6rX8J-qYrHxkX75A-m8_9_fr-iDxo4pkc-k4Oi9P3V-WobJiZwy3gq2_Wq_tzOhN5vjZ-7-__bylhEe7Ca7jdmlasZ3gzJDyaLWxTiwVrI5GunadQChEPV-UwM9fSxRfU=s567',
    date: new Date().toISOString(),
    author: 'Cabadokas',
    category: 'HEALTH',
    tags: ['Welcome'],
  }
];
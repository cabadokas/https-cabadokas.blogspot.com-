
import { BlogPost, SocialLink, NavItem } from './types';

export const APP_NAME = "Cabadokas";

export const ADSENSE_CLIENT_ID = "ca-pub-3127419285072540"; 

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Quora', url: 'https://www.quora.com/profile/Cabadokas', iconClass: 'fa-brands fa-quora', hexColor: '#B92B27' },
  { platform: 'Reddit', url: 'https://www.reddit.com/r/Cabadokas/', iconClass: 'fa-brands fa-reddit', hexColor: '#FF4500' },
  { platform: 'X', url: 'https://x.com/Cabadokas', iconClass: 'fa-brands fa-x-twitter', hexColor: '#000000' },
  { platform: 'Facebook', url: 'https://www.facebook.com/Cabadokas', iconClass: 'fa-brands fa-facebook-f', hexColor: '#1877F2' },
  { platform: 'Instagram', url: 'https://www.instagram.com/Cabadokas/#', iconClass: 'fa-brands fa-instagram', hexColor: '#E4405F' },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@Cabadokas', iconClass: 'fa-brands fa-tiktok', hexColor: '#000000' },
  { platform: 'Discord', url: 'https://discord.com/Cabadokas', iconClass: 'fa-brands fa-discord', hexColor: '#5865F2' },
  { platform: 'Snapchat', url: 'https://www.snapchat.com/@cabadokas', iconClass: 'fa-brands fa-snapchat', hexColor: '#FFFC00' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@Cabadokas', iconClass: 'fa-brands fa-youtube', hexColor: '#FF0000' },
  { platform: 'WhatsApp', url: 'https://www.whatsapp.com/Cabadokas', iconClass: 'fa-brands fa-whatsapp', hexColor: '#25D366' },
  { platform: 'Behance', url: 'https://www.behance.net/Cabadokas', iconClass: 'fa-brands fa-behance', hexColor: '#1769FF' },
  { platform: 'Threads', url: 'https://www.threads.com/Cabadokas', iconClass: 'fa-brands fa-threads', hexColor: '#000000' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/Cabadokas', iconClass: 'fa-brands fa-linkedin-in', hexColor: '#0A66C2' },
  { platform: 'Dribbble', url: 'https://dribbble.com/Cabadokas', iconClass: 'fa-brands fa-dribbble', hexColor: '#EA4C89' },
  { platform: 'Pinterest', url: 'https://www.pinterest.com/Cabadokas/', iconClass: 'fa-brands fa-pinterest-p', hexColor: '#BD081C' },
  { platform: 'Twitch', url: 'https://www.twitch.tv/Cabadokas', iconClass: 'fa-brands fa-twitch', hexColor: '#9146FF' },
  { platform: 'Telegram', url: 'https://t.me/Cabadokas', iconClass: 'fa-brands fa-telegram', hexColor: '#0088cc' },
  { platform: 'Beacons', url: 'https://beacons.ai/cabadokas', iconClass: 'fa-solid fa-link', hexColor: '#000000' },
  { platform: 'Main Site', url: 'https://cabadokas.netlify.app/', iconClass: 'fa-solid fa-globe', hexColor: '#ff69b4' },
];

export const AFFILIATE_PARTNERS = [
  { name: 'Amazon', url: 'https://amazon.com', iconClass: 'fa-brands fa-amazon' },
  { name: 'Digistore24', url: 'https://www.digistore24.com/', iconClass: 'fa-solid fa-cart-shopping' },
  { name: 'Etsy', url: 'https://www.etsy.com/', iconClass: 'fa-brands fa-etsy' },
  { name: 'Awin', url: 'https://www.awin.com/', iconClass: 'fa-solid fa-network-wired' },
  { name: 'ShareASale', url: 'https://www.shareasale.com/', iconClass: 'fa-solid fa-share-nodes' },
  { name: 'eBay', url: 'https://ebay.com', iconClass: 'fa-brands fa-ebay' },
  { name: 'Walmart', url: 'https://walmart.com', iconClass: 'fa-solid fa-shop' },
  { name: 'Target', url: 'https://target.com', iconClass: 'fa-solid fa-bullseye' },
  { name: 'AliExpress', url: 'https://aliexpress.com', iconClass: 'fa-solid fa-bag-shopping' },
  { name: 'Rakuten', url: 'https://rakuten.com', iconClass: 'fa-solid fa-r' },
  { name: 'CJ Affiliate', url: 'https://cj.com', iconClass: 'fa-solid fa-handshake' },
  { name: 'ClickBank', url: 'https://www.clickbank.com', iconClass: 'fa-solid fa-money-bill-trend-up' },
  { name: 'Lookfantastic', url: 'https://lookfantastic.com', iconClass: 'fa-solid fa-spray-can' },
  { name: 'Sephora', url: 'https://www.sephora.com', iconClass: 'fa-solid fa-bag-shopping' },
  { name: 'Algo-Affiliates', url: 'https://algo-affiliates.com/', iconClass: 'fa-solid fa-chart-line' },
  { name: 'Ulta Beauty', url: 'https://www.ulta.com', iconClass: 'fa-solid fa-pump-soap' },
  { name: 'Nordstrom', url: 'https://nordstrom.com', iconClass: 'fa-solid fa-shirt' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'VISIT OUR MAIN WEBSITE', value: 'EXTERNAL_MAIN', external: true, url: 'https://cabadokas.netlify.app/' },
  { label: 'HOME', value: 'HOME' },
  { label: 'PRIVACY POLICY', value: 'PRIVACY' },
  { label: 'HEALTH', value: 'HEALTH' },
  { label: 'BEAUTY', value: 'BEAUTY' },
  { label: 'WEIGHT LOSS', value: 'WEIGHT LOSS' },
];

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

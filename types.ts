export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  category: 'HEALTH' | 'BEAUTY' | 'WEIGHT LOSS' | 'LIFESTYLE';
  tags: string[];
  link?: string; // Link to the original blogger post
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string; // FontAwesome class
  color?: string;
}

export interface NavItem {
  label: string;
  value: string; // Used for filtering or routing
  external?: boolean;
  url?: string;
}
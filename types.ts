
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface SEOData {
  title: string;
  description: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export interface SiteContent {
  seo: Record<string, SEOData>;
  blogs: BlogPost[];
  services: Service[];
  contactSubmissions: ContactSubmission[];
}

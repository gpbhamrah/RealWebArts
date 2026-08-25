export type NavigationPage = 'home' | 'about' | 'services' | 'portfolio' | 'process' | 'estimator' | 'reviews' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'design' | 'development' | 'marketing' | 'optimization';
  deliverables: string[];
  technologies: string[];
  metrics: string;
  popular?: boolean;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'WordPress' | 'WooCommerce' | 'Custom SaaS' | 'UI/UX' | 'Landing Page' | 'Redesign';
  summary: string;
  thumbnail: string;
  heroImage: string;
  results: {
    metric: string;
    label: string;
  }[];
  challenge: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
  year: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
  platform: 'Google' | 'Clutch' | 'Trustpilot' | 'Direct';
  projectType: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  phase: string;
  duration: string;
  description: string;
  keyOutputs: string[];
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'WordPress' | 'Process & Pricing' | 'SEO & Speed';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

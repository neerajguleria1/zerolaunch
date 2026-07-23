export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  subServices: SubService[];
  image?: string;
}

export interface SubService {
  title: string;
  description: string;
  items: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  timeline: string;
  metrics: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  social?: { linkedin?: string; twitter?: string; github?: string };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  solutions: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export interface TechStack {
  name: string;
  category: string;
  icon?: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'pending' | 'in_progress' | 'completed';
  progress: number;
}

export interface Invoice {
  id: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  dueDate: string;
  items: { description: string; amount: number }[];
}

export interface Ticket {
  id: string;
  subject: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  messages: { sender: string; message: string; date: string }[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in_progress' | 'review' | 'completed';
  progress: number;
  startDate: string;
  endDate?: string;
  milestones: Milestone[];
  techStack: string[];
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';
  value: number;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  date: string;
}

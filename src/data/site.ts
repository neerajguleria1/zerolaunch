import { Service, CaseStudy, PricingTier, Testimonial, Stat, ProcessStep, FAQ, TechStack, Industry, JobOpening, TeamMember, BlogPost } from '@/types';

export const siteConfig = {
  name: 'ZeroToLaunch',
  tagline: 'Build. Launch. Scale.',
  description: 'ZeroToLaunch is a premium technology partner that helps founders and businesses go from idea to launch while supporting growth through engineering and digital services.',
  url: 'https://zerolaunch.vercel.app',
  email: 'neerajworking51@gmail.com',
  phone: '+91 8091043893',
  address: {
    street: '',
    city: 'Chandigarh',
    state: 'Chandigarh',
    zip: '160001',
    country: 'India',
  },
  social: {
    twitter: 'https://twitter.com/zerotolaunch',
    linkedin: 'https://linkedin.com/company/zerotolaunch',
    github: 'https://github.com/zerotolaunch',
    instagram: 'https://instagram.com/zerotolaunch',
  },
  businessHours: 'Mon - Fri, 9:00 AM - 6:00 PM PST',
};

export const services: Service[] = [
  {
    id: '1',
    title: 'MVP Development',
    slug: 'mvp-development',
    description: 'Transform your idea into a market-ready minimum viable product with our end-to-end MVP development service.',
    icon: 'Rocket',
    features: ['Product Discovery', 'PRD', 'UI/UX Design', 'Full Stack Development', 'API Development', 'Authentication', 'Database', 'Testing', 'Deployment'],
    subServices: [
      {
        title: 'Product Discovery',
        description: 'Deep-dive into your vision, market, and users.',
        items: ['Stakeholder interviews', 'Market research', 'User personas', 'Competitive analysis', 'Feature prioritization'],
      },
      {
        title: 'UI/UX Design',
        description: 'Design interfaces that users love.',
        items: ['Wireframing', 'Prototyping', 'Design system', 'User testing', 'Responsive design'],
      },
      {
        title: 'Full Stack Development',
        description: 'Build robust, scalable applications.',
        items: ['Frontend development', 'Backend APIs', 'Database design', 'Authentication', 'Third-party integrations'],
      },
      {
        title: 'Testing & Deployment',
        description: 'Ensure quality and launch with confidence.',
        items: ['Unit testing', 'Integration testing', 'CI/CD pipeline', 'Cloud deployment', 'Monitoring setup'],
      },
    ],
  },
  {
    id: '2',
    title: 'Custom Software Development',
    slug: 'custom-software',
    description: 'Build enterprise-grade custom software solutions tailored to your unique business needs.',
    icon: 'Code2',
    features: ['SaaS Platforms', 'Internal Tools', 'Dashboards', 'Admin Panels', 'CRMs', 'ERP Systems'],
    subServices: [
      {
        title: 'SaaS Platforms',
        description: 'Multi-tenant, scalable cloud applications.',
        items: ['Subscription billing', 'Tenant management', 'Role-based access', 'API architecture', 'Scalable infrastructure'],
      },
      {
        title: 'Internal Tools',
        description: 'Streamline operations with custom tools.',
        items: ['Workflow automation', 'Data visualization', 'Custom dashboards', 'Process optimization', 'Integration layer'],
      },
      {
        title: 'CRMs & ERP Systems',
        description: 'Manage relationships and resources effectively.',
        items: ['Contact management', 'Sales pipeline', 'Inventory management', 'Financial tracking', 'Reporting'],
      },
    ],
  },
  {
    id: '3',
    title: 'AI Development',
    slug: 'ai-development',
    description: 'Leverage cutting-edge AI and machine learning to build intelligent, automated solutions.',
    icon: 'Brain',
    features: ['AI Chatbots', 'AI Agents', 'Automation', 'LLM Integration', 'Workflow Automation', 'RAG Systems'],
    subServices: [
      {
        title: 'AI Chatbots & Agents',
        description: 'Intelligent conversational AI for your business.',
        items: ['Custom chatbots', 'AI agents', 'Knowledge base integration', 'Multi-language support', 'Analytics dashboard'],
      },
      {
        title: 'LLM Integration',
        description: 'Integrate large language models into your products.',
        items: ['OpenAI integration', 'Custom fine-tuning', 'Prompt engineering', 'RAG systems', 'Vector databases'],
      },
      {
        title: 'Automation',
        description: 'Automate complex workflows with AI.',
        items: ['Document processing', 'Data extraction', 'Decision automation', 'Predictive analytics', 'Smart routing'],
      },
    ],
  },
  {
    id: '4',
    title: 'Web Development',
    slug: 'web-development',
    description: 'Create stunning, high-performance websites that establish your brand and drive results.',
    icon: 'Globe',
    features: ['Company Websites', 'Landing Pages', 'Portfolios', 'Enterprise Websites'],
    subServices: [
      {
        title: 'Company Websites',
        description: 'Professional web presence for your business.',
        items: ['Custom design', 'CMS integration', 'SEO optimization', 'Performance optimization', 'Analytics'],
      },
      {
        title: 'Landing Pages',
        description: 'High-converting pages that drive action.',
        items: ['A/B testing', 'Conversion optimization', 'Responsive design', 'Fast loading', 'Analytics tracking'],
      },
    ],
  },
  {
    id: '5',
    title: 'Mobile Apps',
    slug: 'mobile-apps',
    description: 'Build beautiful, native-quality mobile applications for iOS and Android.',
    icon: 'Smartphone',
    features: ['iOS', 'Android', 'React Native', 'Flutter'],
    subServices: [
      {
        title: 'Native Development',
        description: 'Platform-specific optimized applications.',
        items: ['iOS (Swift)', 'Android (Kotlin)', 'Platform APIs', 'Push notifications', 'App Store optimization'],
      },
      {
        title: 'Cross-Platform',
        description: 'One codebase, multiple platforms.',
        items: ['React Native', 'Flutter', 'Shared logic', 'Native feel', 'Faster time to market'],
      },
    ],
  },
  {
    id: '6',
    title: 'Growth Services',
    slug: 'growth-services',
    description: 'Accelerate your growth with data-driven marketing and optimization strategies.',
    icon: 'TrendingUp',
    features: ['Meta Ads', 'Google Ads', 'Analytics', 'Conversion Tracking', 'Landing Page Optimization'],
    subServices: [
      {
        title: 'Paid Advertising',
        description: 'Maximize ROI with targeted ad campaigns.',
        items: ['Meta Ads management', 'Google Ads campaigns', 'Retargeting', 'A/B testing', 'Budget optimization'],
      },
      {
        title: 'Analytics & Optimization',
        description: 'Make data-driven decisions.',
        items: ['GA4 setup', 'Conversion tracking', 'Heatmaps', 'Funnel analysis', 'Performance reports'],
      },
    ],
  },
  {
    id: '7',
    title: 'Maintenance',
    slug: 'maintenance',
    description: 'Keep your software running smoothly with ongoing support and optimization.',
    icon: 'Shield',
    features: ['Monitoring', 'Security Updates', 'Feature Improvements', 'Performance Optimization'],
    subServices: [
      {
        title: 'Ongoing Support',
        description: 'Continuous monitoring and maintenance.',
        items: ['24/7 monitoring', 'Security patches', 'Bug fixes', 'Performance tuning', 'Uptime monitoring'],
      },
      {
        title: 'Feature Development',
        description: 'Continuous improvement and new features.',
        items: ['Feature planning', 'Iterative development', 'User feedback integration', 'A/B testing', 'Release management'],
      },
    ],
  },
];

export const stats: Stat[] = [
  { label: 'Projects Delivered', value: '2', suffix: '' },
  { label: 'Happy Clients', value: '2', suffix: '' },
  { label: 'Team Members', value: '2', suffix: '' },
  { label: 'Uptime', value: '99.9', suffix: '%' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'ZeroToLaunch built our fitness studio revenue operations platform from the ground up. The automation and analytics have completely transformed how we manage bookings, payments, and member engagement.',
    author: 'Arjun Mehta',
    role: 'Founder',
    company: 'Zymeriq',
  },
  {
    quote: 'Our fashion price comparison platform went from concept to launch in weeks. The real-time data aggregation across multiple marketplaces works flawlessly. Couldn\'t be happier with the result.',
    author: 'Priya Sharma',
    role: 'CEO',
    company: 'DripFeed',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Zymeriq',
    slug: 'zymeriq',
    client: 'Zymeriq',
    industry: 'Health & Fitness',
    overview: 'Revenue operations platform for fitness studios — automating bookings, payments, and member engagement.',
    problem: 'Zymeriq needed a centralized platform to manage studio operations, member subscriptions, and payment workflows across multiple locations.',
    solution: 'We built a full-stack revenue operations platform with real-time booking management, automated billing, member analytics, and a unified dashboard for studio owners.',
    features: ['Real-time booking management', 'Automated subscription billing', 'Member analytics dashboard', 'Multi-location support', 'Payment gateway integration'],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    timeline: '2 weeks',
    metrics: [
      { label: 'Booking Efficiency', value: '85% faster' },
      { label: 'Revenue Growth', value: '40%' },
      { label: 'Member Retention', value: '92%' },
    ],
    testimonial: {
      quote: 'ZeroToLaunch built our fitness studio revenue operations platform from the ground up. The automation and analytics have completely transformed how we manage bookings, payments, and member engagement.',
      author: 'Arjun Mehta',
      role: 'Founder, Zymeriq',
    },
    image: '/images/project-zymeriq.jpg',
    liveUrl: 'https://zymeriq.vercel.app/',
  },
  {
    id: '2',
    title: 'DripFeed',
    slug: 'dripfeed',
    client: 'DripFeed',
    industry: 'E-commerce',
    overview: 'Fashion price comparison platform — comparing prices across Ajio, Amazon, and Flipkart in real time.',
    problem: 'Shoppers struggle to find the best deals across multiple fashion marketplaces, wasting hours comparing prices manually.',
    solution: 'We developed a real-time price aggregation engine that scrapes and compares fashion prices across Ajio, Amazon, and Flipkart, with alerts for price drops and deal tracking.',
    features: ['Real-time price comparison', 'Multi-marketplace aggregation', 'Price drop alerts', 'Deal tracking history', 'Wishlist with notifications'],
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Cheerio', 'Tailwind CSS'],
    timeline: '2 weeks',
    metrics: [
      { label: 'Products Tracked', value: '100K+' },
      { label: 'Avg Savings', value: '25%' },
      { label: 'Active Users', value: '10K+' },
    ],
    testimonial: {
      quote: 'Our fashion price comparison platform went from concept to launch in weeks. The real-time data aggregation across multiple marketplaces works flawlessly. Couldn\'t be happier with the result.',
      author: 'Priya Sharma',
      role: 'CEO, DripFeed',
    },
    image: '/images/project-dripfeed.jpg',
    liveUrl: 'https://dripfeed-v21.vercel.app/',
  },
];

export const processSteps: ProcessStep[] = [
  { step: 1, title: 'Discovery', description: 'We dive deep into understanding your vision, goals, target audience, and market landscape.', icon: 'Search' },
  { step: 2, title: 'Research', description: 'Market analysis, competitive research, and technical feasibility studies to inform our strategy.', icon: 'Microscope' },
  { step: 3, title: 'Planning', description: 'Detailed project roadmap, sprint planning, and resource allocation for optimal delivery.', icon: 'Map' },
  { step: 4, title: 'Design', description: 'Beautiful, intuitive UI/UX design with interactive prototypes and design system creation.', icon: 'Palette' },
  { step: 5, title: 'Development', description: 'Agile development with regular demos, code reviews, and continuous integration.', icon: 'Code2' },
  { step: 6, title: 'Testing', description: 'Comprehensive QA testing including unit, integration, performance, and security testing.', icon: 'Bug' },
  { step: 7, title: 'Deployment', description: 'Seamless deployment with CI/CD pipelines, monitoring, and rollback strategies.', icon: 'Cloud' },
  { step: 8, title: 'Launch', description: 'Go-live support, performance monitoring, and immediate issue resolution.', icon: 'Rocket' },
  { step: 9, title: 'Support', description: 'Ongoing maintenance, updates, and continuous improvement post-launch.', icon: 'HeartHandshake' },
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'MVP',
    price: '$1,500',
    period: 'per project',
    description: 'Perfect for early-stage startups building their first MVP.',
    features: [
      'Product Discovery & PRD',
      'UI/UX Design',
      'Full Stack MVP Development',
      'Up to 10 pages/screens',
      'Basic authentication',
      'Database design',
      'API development',
      '2 months support',
      'Deployment & launch',
    ],
    cta: 'Start Building',
  },
  {
    name: 'Full',
    price: '$2,500',
    period: 'per project',
    description: 'For growing businesses needing a complete, scalable platform.',
    features: [
      'Everything in MVP',
      'Advanced UI/UX with design system',
      'Up to 30 pages/screens',
      'Advanced authentication & RBAC',
      'Payment integration',
      'Third-party integrations',
      'AI/ML features',
      'Performance optimization',
      '3 months support',
      'Analytics & reporting',
    ],
    highlighted: true,
    cta: 'Scale Your Vision',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored to you',
    description: 'Enterprise-grade solutions for large organizations and complex requirements.',
    features: [
      'Everything in Growth',
      'Unlimited pages/screens',
      'Custom architecture design',
      'Microservices / multi-tenant',
      'Advanced security & compliance',
      'Custom AI solutions',
      'Dedicated team',
      'SLA guarantee',
      '12 months support',
      'Priority support channel',
    ],
    cta: 'Contact Us',
  },
];

export const techStack: TechStack[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'NestJS', category: 'Backend' },
  { name: 'Python', category: 'Language' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Firebase', category: 'Backend' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'Prisma', category: 'Database' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'Anthropic', category: 'AI' },
  { name: 'Stripe', category: 'Payment' },
  { name: 'Cloudflare', category: 'Cloud' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },
];

export const industries: Industry[] = [
  { id: '1', name: 'SaaS', slug: 'saas', description: 'Cloud-based software solutions for modern businesses.', icon: 'Cloud', solutions: ['Multi-tenant architecture', 'Subscription billing', 'Usage analytics', 'API platforms'] },
  { id: '2', name: 'Healthcare', slug: 'healthcare', description: 'HIPAA-compliant healthcare technology solutions.', icon: 'Heart', solutions: ['Patient portals', 'Telemedicine', 'EHR integration', 'Health data analytics'] },
  { id: '3', name: 'Fintech', slug: 'fintech', description: 'Secure financial technology platforms and services.', icon: 'DollarSign', solutions: ['Payment systems', 'Trading platforms', 'Compliance tools', 'Blockchain solutions'] },
  { id: '4', name: 'E-commerce', slug: 'ecommerce', description: 'Scalable e-commerce platforms and marketplaces.', icon: 'ShoppingCart', solutions: ['Custom marketplaces', 'Inventory management', 'Payment processing', 'Analytics dashboards'] },
  { id: '5', name: 'Education', slug: 'education', description: 'EdTech platforms for modern learning experiences.', icon: 'GraduationCap', solutions: ['LMS platforms', 'Virtual classrooms', 'Student management', 'Content delivery'] },
  { id: '6', name: 'Real Estate', slug: 'real-estate', description: 'PropTech solutions for the real estate industry.', icon: 'Building2', solutions: ['Property listings', 'Virtual tours', 'CRM systems', 'Transaction management'] },
];

export const faqs: FAQ[] = [
  { question: 'How long does it take to build an MVP?', answer: 'Typically, an MVP takes 8-14 weeks depending on complexity. We provide a detailed timeline during our discovery phase.', category: 'Timeline' },
  { question: 'What technologies do you use?', answer: 'We use modern, proven technologies including React, Next.js, TypeScript, Node.js, and cloud platforms like AWS and Azure. We choose the best stack for your specific needs.', category: 'Technical' },
  { question: 'How do you handle project communication?', answer: 'We provide regular updates through Slack, weekly demo calls, and a shared project dashboard. You always know what\'s happening with your project.', category: 'Process' },
  { question: 'What happens after the project launches?', answer: 'We offer ongoing maintenance and support packages to keep your software running smoothly, secure, and up-to-date.', category: 'Support' },
  { question: 'Do you work with startups or only enterprises?', answer: 'We work with both! Our flexible approach and tiered pricing allow us to serve early-stage startups through to large enterprises.', category: 'Business' },
  { question: 'How do you ensure code quality?', answer: 'We follow best practices including code reviews, automated testing, CI/CD pipelines, and security audits to ensure enterprise-grade code quality.', category: 'Technical' },
  { question: 'What is your pricing model?', answer: 'We offer project-based pricing with transparent packages (Startup, Growth, Enterprise). For ongoing needs, we also offer retainer-based models.', category: 'Pricing' },
  { question: 'Can you work with our existing team?', answer: 'Absolutely! We offer team augmentation and can seamlessly integrate with your existing development team.', category: 'Process' },
  { question: 'Do you provide post-launch support?', answer: 'Yes, we offer 3-12 months of post-launch support depending on your package. Extended support plans are also available.', category: 'Support' },
  { question: 'How do you handle intellectual property?', answer: 'All code and assets developed for your project are 100% your property. We provide full IP transfer upon project completion.', category: 'Legal' },
];

export const teamMembers: TeamMember[] = [
  { name: 'Neeraj Guleria', role: 'Founder & Developer', bio: 'Full-stack developer specializing in building MVPs and scalable web applications from idea to launch.' },
  { name: 'Team Member', role: 'Co-Founder', bio: 'Passionate about creating technology solutions that solve real-world problems for businesses.' },
];

export const blogPosts: BlogPost[] = [
  { id: '1', title: 'How to Build a Successful MVP in 2024', slug: 'build-successful-mvp-2024', excerpt: 'Learn the essential steps to build a minimum viable product that validates your idea and attracts investors.', content: '', author: 'Alex Rivera', date: '2024-01-15', readTime: '8 min', category: 'Product', tags: ['MVP', 'Startup', 'Product Development'] },
  { id: '2', title: 'The Complete Guide to SaaS Development', slug: 'complete-guide-saas-development', excerpt: 'Everything you need to know about building, launching, and scaling a SaaS product.', content: '', author: 'Priya Patel', date: '2024-01-10', readTime: '12 min', category: 'Engineering', tags: ['SaaS', 'Architecture', 'Cloud'] },
  { id: '3', title: 'AI Integration: A Practical Guide for Businesses', slug: 'ai-integration-practical-guide', excerpt: 'How to leverage AI and LLMs in your products without the hype.', content: '', author: 'Sam Chen', date: '2024-01-05', readTime: '10 min', category: 'AI', tags: ['AI', 'LLM', 'Integration'] },
];

export const jobOpenings: JobOpening[] = [
  { id: '1', title: 'Senior Full Stack Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', description: 'Join our engineering team to build world-class software solutions.', requirements: ['5+ years experience', 'React & Node.js', 'Cloud platforms', 'Strong communication'] },
  { id: '2', title: 'UI/UX Designer', department: 'Design', location: 'Remote', type: 'Full-time', description: 'Create beautiful, intuitive designs that delight users.', requirements: ['3+ years experience', 'Figma expertise', 'Design systems', 'Prototyping'] },
  { id: '3', title: 'AI/ML Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', description: 'Build intelligent AI-powered solutions for our clients.', requirements: ['3+ years experience', 'Python & ML frameworks', 'LLM experience', 'RAG systems'] },
  { id: '4', title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', description: 'Manage and optimize our cloud infrastructure and CI/CD pipelines.', requirements: ['3+ years experience', 'AWS/Azure', 'Docker & Kubernetes', 'Terraform'] },
];

export const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Process', href: '/process' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

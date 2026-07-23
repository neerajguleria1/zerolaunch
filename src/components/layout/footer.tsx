'use client';

import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';

const footerLinks = {
  Services: [
    { label: 'MVP Development', href: '/services/mvp-development' },
    { label: 'Custom Software', href: '/services/custom-software' },
    { label: 'AI Development', href: '/services/ai-development' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-apps' },
    { label: 'Growth Services', href: '/services/growth-services' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Process', href: '/process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  Resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ],
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border-main">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-foreground">Zero<span className="text-blue-500">To</span>Launch</span>
            </Link>
            <p className="text-foreground-50 text-sm leading-relaxed mb-6 max-w-sm">
              A premium technology partner that helps founders and businesses go from idea to launch while supporting growth through engineering and digital services.
            </p>
            <div className="space-y-3 text-sm text-foreground-40">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-foreground-70 transition-colors">
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-foreground-70 transition-colors">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {siteConfig.address.city}, {siteConfig.address.state}
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-foreground font-semibold mb-4 text-sm">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground-40 hover:text-foreground-70 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border-main pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-30">
            © {new Date().getFullYear()} ZeroToLaunch. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground-30 hover:text-foreground-70 transition-colors" aria-label="Twitter">
              <XIcon className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground-30 hover:text-foreground-70 transition-colors" aria-label="LinkedIn">
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-foreground-30 hover:text-foreground-70 transition-colors" aria-label="GitHub">
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

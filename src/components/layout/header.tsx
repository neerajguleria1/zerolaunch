'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/button';
import { navItems, services } from '@/data/site';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-background/60 backdrop-blur-2xl border-b border-border-main shadow-2xl'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-foreground">Zero<span className="text-blue-500">To</span>Launch</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.href === '/services' && setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-foreground-70 hover:text-foreground transition-colors rounded-lg hover:bg-surface-05"
                  >
                    {item.label}
                    {item.href === '/services' && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  {item.href === '/services' && activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-80 bg-surface-elevated/90 backdrop-blur-2xl border border-border-main rounded-2xl p-4 shadow-2xl mt-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-foreground-70 hover:text-foreground hover:bg-surface-05 transition-all group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                            <span className="text-blue-500 text-sm font-bold">{service.icon[0]}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium">{service.title}</p>
                            <p className="text-xs text-foreground-40 line-clamp-1">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/dashboard" className="text-sm text-foreground-70 hover:text-foreground transition-colors px-4 py-2">
                Client Portal
              </Link>
              <Link href="/book-a-call">
                <Button variant="gradient" size="sm">
                  Book a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-foreground-70 hover:text-foreground"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col h-full p-6 pt-24">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-2xl font-medium text-foreground-70 hover:text-foreground py-3 border-b border-border-main transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pb-8 space-y-3">
                <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="secondary" size="lg" className="w-full">
                    Client Portal
                  </Button>
                </Link>
                <Link href="/book-a-call" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="gradient" size="lg" className="w-full">
                    Book a Call
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

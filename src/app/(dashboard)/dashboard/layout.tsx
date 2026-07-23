'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderKanban, Receipt, FileText, MessageSquare, Ticket, Calendar, Rocket, BarChart3, Settings, Bell, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
  { label: 'Invoices', href: '/dashboard/invoices', icon: Receipt },
  { label: 'Files', href: '/dashboard/files', icon: FileText },
  { label: 'Chat', href: '/dashboard/chat', icon: MessageSquare },
  { label: 'Tickets', href: '/dashboard/tickets', icon: Ticket },
  { label: 'Meetings', href: '/dashboard/meetings', icon: Calendar },
  { label: 'Deployments', href: '/dashboard/deployments', icon: Rocket },
  { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <aside className={cn(
        'fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-black/50 backdrop-blur-xl border-r border-white/5 flex flex-col transition-transform lg:translate-x-0',
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="p-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-lg font-bold text-white">Z<span className="text-blue-400">T</span>L</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all',
                isActive ? 'bg-blue-500/10 text-blue-400' : 'text-white/50 hover:text-white hover:bg-white/5'
              )}>
                <Icon className="w-4 h-4" /> {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-1">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 w-full transition-all">
            <Settings className="w-4 h-4" /> Settings
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/50 hover:text-white hover:bg-white/5 w-full transition-all">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />}

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 h-16 bg-black/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-white/50 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden lg:block">
            <h2 className="text-sm text-white/40">Client Portal</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white/50 hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">JD</div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

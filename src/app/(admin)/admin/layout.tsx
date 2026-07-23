'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FolderKanban, ListTodo, Receipt, CreditCard, FileSignature, HeartPulse, BarChart3, PenTool, Image, Ticket, Shield, Bell, Activity, Megaphone, FileBarChart, Settings, LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const sidebarLinks = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'CRM', href: '/admin/crm', icon: Users },
  { label: 'Projects', href: '/admin/projects', icon: FolderKanban },
  { label: 'Tasks', href: '/admin/tasks', icon: ListTodo },
  { label: 'Invoices', href: '/admin/invoices', icon: Receipt },
  { label: 'Payments', href: '/admin/payments', icon: CreditCard },
  { label: 'Contracts', href: '/admin/contracts', icon: FileSignature },
  { label: 'HR', href: '/admin/hr', icon: HeartPulse },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { label: 'Blog', href: '/admin/blog', icon: PenTool },
  { label: 'Portfolio', href: '/admin/portfolio', icon: Image },
  { label: 'Tickets', href: '/admin/tickets', icon: Ticket },
  { label: 'Users', href: '/admin/users', icon: Shield },
  { label: 'Notifications', href: '/admin/notifications', icon: Bell },
  { label: 'Marketing', href: '/admin/marketing', icon: Megaphone },
  { label: 'Reports', href: '/admin/reports', icon: FileBarChart },
  { label: 'Activity', href: '/admin/activity-logs', icon: Activity },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <div>
              <span className="text-lg font-bold text-white block leading-tight">ZTL</span>
              <span className="text-[10px] text-white/30 uppercase tracking-wider">Admin Panel</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-0.5 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all',
                isActive ? 'bg-purple-500/10 text-purple-400' : 'text-white/50 hover:text-white hover:bg-white/5'
              )}>
                <Icon className="w-4 h-4" /> {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-white hover:bg-white/5 w-full transition-all">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />}

      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 h-16 bg-black/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-white/50 hover:text-white"><Menu className="w-5 h-5" /></button>
          <div className="hidden lg:block"><h2 className="text-sm text-white/40">Admin Dashboard</h2></div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-white/50 hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-sm font-medium">AD</div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

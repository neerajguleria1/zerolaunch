'use client';

import { motion } from 'framer-motion';
import { FolderKanban, Receipt, Ticket, MessageSquare, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

const cards = [
  { label: 'Active Projects', value: '3', icon: FolderKanban, href: '/dashboard/projects', color: 'blue' },
  { label: 'Pending Invoices', value: '2', icon: Receipt, href: '/dashboard/invoices', color: 'yellow' },
  { label: 'Open Tickets', value: '5', icon: Ticket, href: '/dashboard/tickets', color: 'green' },
  { label: 'Unread Messages', value: '12', icon: MessageSquare, href: '/dashboard/chat', color: 'purple' },
];

const recentActivity = [
  { text: 'Design mockups for Dashboard v2 approved', time: '2 hours ago', type: 'success' },
  { text: 'New invoice #INV-0042 sent', time: '5 hours ago', type: 'info' },
  { text: 'API integration completed', time: '1 day ago', type: 'success' },
  { text: 'Sprint planning meeting scheduled', time: '2 days ago', type: 'info' },
  { text: 'Bug fix deployed to staging', time: '3 days ago', type: 'success' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-surface-05 border border-border-main p-6">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-white mb-1">Welcome back, John</h1>
          <p className="text-white/40 text-sm">Here&apos;s what&apos;s happening with your projects.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div key={card.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link href={card.href} className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-5 h-5 text-white/40" />
                  <span className="text-2xl font-bold text-white">{card.value}</span>
                </div>
                <p className="text-sm text-white/50">{card.label}</p>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${activity.type === 'success' ? 'bg-green-400' : 'bg-blue-400'}`} />
                <div>
                  <p className="text-sm text-white/70">{activity.text}</p>
                  <p className="text-xs text-white/30">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Project Progress</h3>
          <div className="space-y-4">
            {[
              { name: 'E-commerce Platform', progress: 75 },
              { name: 'Mobile App v2', progress: 45 },
              { name: 'Analytics Dashboard', progress: 90 },
            ].map((project) => (
              <div key={project.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">{project.name}</span>
                  <span className="text-white/40">{project.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

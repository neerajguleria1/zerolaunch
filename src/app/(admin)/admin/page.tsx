'use client';

import { motion } from 'framer-motion';
import { DollarSign, Users, FolderKanban, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const stats = [
  { label: 'Total Revenue', value: '$245,800', change: '+12.5%', up: true, icon: DollarSign },
  { label: 'Active Clients', value: '32', change: '+4', up: true, icon: Users },
  { label: 'Active Projects', value: '18', change: '+2', up: true, icon: FolderKanban },
  { label: 'Avg Project Value', value: '$42,500', change: '-2.1%', up: false, icon: TrendingUp },
];

const recentLeads = [
  { name: 'Acme Corp', email: 'hello@acme.com', value: '$85,000', status: 'qualified' },
  { name: 'TechStartup Inc', email: 'founder@tech.io', value: '$25,000', status: 'new' },
  { name: 'GlobalCo', email: 'cto@global.com', value: '$120,000', status: 'proposal' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-5 h-5 text-white/40" />
                <span className={`flex items-center gap-1 text-xs ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />} {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/40 mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Leads</h3>
          <div className="space-y-3">
            {recentLeads.map((lead) => (
              <div key={lead.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div>
                  <p className="text-sm text-white">{lead.name}</p>
                  <p className="text-xs text-white/30">{lead.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{lead.value}</p>
                  <p className="text-xs text-white/30 capitalize">{lead.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Revenue by Month</h3>
          <div className="h-48 flex items-end gap-1 sm:gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 95, 60, 75, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t bg-gradient-to-t from-purple-500 to-blue-500 transition-all" style={{ height: `${h}%` }} />
                <span className="hidden sm:inline text-[10px] text-white/30">{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Eye } from 'lucide-react';

const metrics = [
  { label: 'Page Views', value: '124,523', change: '+12%', icon: Eye },
  { label: 'Unique Visitors', value: '45,891', change: '+8%', icon: Users },
  { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: TrendingUp },
  { label: 'Avg Session', value: '4m 32s', change: '+15s', icon: BarChart3 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-5 h-5 text-white/40" />
                <span className="text-xs text-green-400">{m.change}</span>
              </div>
              <p className="text-2xl font-bold text-white">{m.value}</p>
              <p className="text-sm text-white/40 mt-1">{m.label}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 h-80 flex items-center justify-center">
        <p className="text-white/30">Analytics chart placeholder - Connect your analytics provider</p>
      </div>
    </div>
  );
}

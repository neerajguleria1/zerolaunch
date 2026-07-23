'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const deployments = [
  { version: 'v2.4.1', environment: 'Production', status: 'success', date: 'Feb 12, 2024 3:45 PM', commit: 'feat: add payment integration' },
  { version: 'v2.4.0', environment: 'Staging', status: 'success', date: 'Feb 11, 2024 10:20 AM', commit: 'chore: update dependencies' },
  { version: 'v2.3.9', environment: 'Production', status: 'success', date: 'Feb 8, 2024 2:15 PM', commit: 'fix: resolve auth issue' },
];

const statusIcons: Record<string, React.ReactNode> = { success: <CheckCircle2 className="w-4 h-4 text-green-400" />, pending: <Clock className="w-4 h-4 text-yellow-400" />, failed: <AlertCircle className="w-4 h-4 text-red-400" /> };

export default function DeploymentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Deployments</h1>
      <div className="space-y-3">
        {deployments.map((d, i) => (
          <motion.div key={d.version + d.environment} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
            {statusIcons[d.status]}
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-white">{d.version}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">{d.environment}</span>
              </div>
              <p className="text-xs text-white/30 mt-1 font-mono">{d.commit}</p>
            </div>
            <span className="text-xs text-white/30">{d.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

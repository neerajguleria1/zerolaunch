'use client';

import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const tickets = [
  { id: 'TK-001', subject: 'Design update needed', status: 'open', priority: 'high', created: 'Feb 10, 2024' },
  { id: 'TK-002', subject: 'API integration question', status: 'in_progress', priority: 'medium', created: 'Feb 8, 2024' },
  { id: 'TK-003', subject: 'Feature request: dark mode', status: 'resolved', priority: 'low', created: 'Feb 5, 2024' },
];

const priorityColors: Record<string, string> = { low: 'text-green-400', medium: 'text-yellow-400', high: 'text-red-400', urgent: 'text-red-500' };
const statusColors: Record<string, string> = { open: 'text-blue-400 bg-blue-400/10', in_progress: 'text-yellow-400 bg-yellow-400/10', resolved: 'text-green-400 bg-green-400/10', closed: 'text-white/40 bg-white/10' };

export default function TicketsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Support Tickets</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl text-sm hover:bg-blue-600 transition-colors">
          <Plus className="w-4 h-4" /> New Ticket
        </button>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">ID</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Subject</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Priority</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Status</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Created</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, i) => (
                <motion.tr key={ticket.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors cursor-pointer">
                  <td className="px-6 py-4 text-sm text-white/60 font-mono">{ticket.id}</td>
                  <td className="px-6 py-4 text-sm text-white">{ticket.subject}</td>
                  <td className={`px-6 py-4 text-sm capitalize ${priorityColors[ticket.priority]}`}>{ticket.priority}</td>
                  <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[ticket.status]}`}>{ticket.status.replace('_', ' ')}</span></td>
                  <td className="px-6 py-4 text-sm text-white/40">{ticket.created}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

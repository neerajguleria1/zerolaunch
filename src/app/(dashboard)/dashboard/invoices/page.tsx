'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const invoices = [
  { id: 'INV-0042', amount: '$15,000', status: 'paid', date: 'Jan 15, 2024', description: 'MVP Development - Phase 1' },
  { id: 'INV-0043', amount: '$12,500', status: 'pending', date: 'Feb 1, 2024', description: 'MVP Development - Phase 2' },
  { id: 'INV-0044', amount: '$8,000', status: 'paid', date: 'Feb 15, 2024', description: 'UI/UX Design Package' },
];

const statusColors: Record<string, string> = { paid: 'text-green-400 bg-green-400/10', pending: 'text-yellow-400 bg-yellow-400/10', overdue: 'text-red-400 bg-red-400/10' };

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Invoices</h1>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Invoice</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Description</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Date</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Amount</th>
                <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Status</th>
                <th className="text-right text-xs text-white/40 font-medium px-6 py-4 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, i) => (
                <motion.tr key={invoice.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{invoice.id}</td>
                  <td className="px-6 py-4 text-sm text-white/60">{invoice.description}</td>
                  <td className="px-6 py-4 text-sm text-white/40">{invoice.date}</td>
                  <td className="px-6 py-4 text-sm text-white font-medium">{invoice.amount}</td>
                  <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[invoice.status]}`}>{invoice.status}</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all"><Download className="w-4 h-4" /></button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

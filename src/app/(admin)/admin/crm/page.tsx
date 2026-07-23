'use client';

import { motion } from 'framer-motion';

const leads = [
  { name: 'Acme Corp', email: 'hello@acme.com', source: 'Referral', status: 'qualified', value: 85000, created: 'Feb 10, 2024' },
  { name: 'TechStartup Inc', email: 'founder@tech.io', source: 'Website', status: 'new', value: 25000, created: 'Feb 12, 2024' },
  { name: 'GlobalCo', email: 'cto@global.com', source: 'LinkedIn', status: 'proposal', value: 120000, created: 'Feb 8, 2024' },
  { name: 'HealthTech', email: 'team@health.io', source: 'Conference', status: 'contacted', value: 65000, created: 'Feb 5, 2024' },
];

const stages = ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won'];
const stageColors: Record<string, string> = { new: 'bg-blue-500', contacted: 'bg-yellow-500', qualified: 'bg-green-500', proposal: 'bg-purple-500', negotiation: 'bg-orange-500', won: 'bg-emerald-500' };

export default function CRMPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">CRM - Lead Pipeline</h1>

      <div className="flex gap-3 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div key={stage} className="flex-shrink-0 w-72">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-2 h-2 rounded-full ${stageColors[stage]}`} />
              <span className="text-sm font-medium text-white capitalize">{stage}</span>
              <span className="text-xs text-white/30">({leads.filter(l => l.status === stage).length})</span>
            </div>
            <div className="space-y-3">
              {leads.filter(l => l.status === stage).map((lead) => (
                <motion.div key={lead.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-sm text-white font-medium">{lead.name}</p>
                  <p className="text-xs text-white/30">{lead.email}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-white/40">${(lead.value / 1000).toFixed(0)}K</span>
                    <span className="text-xs text-white/30">{lead.source}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

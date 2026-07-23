'use client';

const contracts = [
  { id: 'CTR-001', client: 'Acme Corp', type: 'MVP Development', value: 45000, status: 'active', signed: 'Jan 5, 2024' },
  { id: 'CTR-002', client: 'TechStartup Inc', type: 'Mobile App', value: 35000, status: 'active', signed: 'Jan 15, 2024' },
  { id: 'CTR-003', client: 'GlobalCo', type: 'Enterprise Platform', value: 120000, status: 'draft', signed: 'Pending' },
];

const statusColors: Record<string, string> = { active: 'text-green-400 bg-green-400/10', draft: 'text-yellow-400 bg-yellow-400/10', expired: 'text-white/40 bg-white/10' };

export default function ContractsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Contracts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contracts.map(c => (
          <div key={c.id} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs text-white/30 font-mono">{c.id}</span>
              <span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[c.status]}`}>{c.status}</span>
            </div>
            <h3 className="text-white font-medium mb-1">{c.client}</h3>
            <p className="text-sm text-white/50 mb-3">{c.type}</p>
            <div className="flex justify-between text-sm">
              <span className="text-white font-medium">${c.value.toLocaleString()}</span>
              <span className="text-white/30">Signed: {c.signed}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

const tickets = [
  { id: 'TK-001', client: 'Acme Corp', subject: 'Login issue', priority: 'high', status: 'open', created: 'Feb 12, 2024' },
  { id: 'TK-002', client: 'TechStartup Inc', subject: 'Feature request', priority: 'medium', status: 'in_progress', created: 'Feb 10, 2024' },
  { id: 'TK-003', client: 'GlobalCo', subject: 'Performance question', priority: 'low', status: 'resolved', created: 'Feb 5, 2024' },
];

const priorityColors: Record<string, string> = { low: 'text-green-400', medium: 'text-yellow-400', high: 'text-red-400' };
const statusColors: Record<string, string> = { open: 'text-blue-400 bg-blue-400/10', in_progress: 'text-yellow-400 bg-yellow-400/10', resolved: 'text-green-400 bg-green-400/10', closed: 'text-white/40 bg-white/10' };

export default function AdminTicketsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Support Tickets</h1>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-white/5">
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">ID</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Client</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Subject</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Priority</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Status</th>
          </tr></thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 cursor-pointer">
                <td className="px-6 py-4 text-sm text-white/60 font-mono">{t.id}</td>
                <td className="px-6 py-4 text-sm text-white/70">{t.client}</td>
                <td className="px-6 py-4 text-sm text-white">{t.subject}</td>
                <td className={`px-6 py-4 text-sm capitalize ${priorityColors[t.priority]}`}>{t.priority}</td>
                <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[t.status]}`}>{t.status.replace('_', ' ')}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

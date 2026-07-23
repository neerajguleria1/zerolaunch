'use client';

const invoices = [
  { id: 'INV-0042', client: 'Acme Corp', amount: 15000, status: 'paid', due: 'Jan 15, 2024' },
  { id: 'INV-0043', client: 'TechStartup Inc', amount: 12500, status: 'pending', due: 'Feb 1, 2024' },
  { id: 'INV-0044', client: 'GlobalCo', amount: 45000, status: 'overdue', due: 'Jan 20, 2024' },
];

const statusColors: Record<string, string> = { paid: 'text-green-400 bg-green-400/10', pending: 'text-yellow-400 bg-yellow-400/10', overdue: 'text-red-400 bg-red-400/10' };

export default function AdminInvoicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Invoices</h1>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-white/5">
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">ID</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Client</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Amount</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Status</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Due Date</th>
          </tr></thead>
          <tbody>
            {invoices.map(inv => (
              <tr key={inv.id} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                <td className="px-6 py-4 text-sm text-white font-mono">{inv.id}</td>
                <td className="px-6 py-4 text-sm text-white/70">{inv.client}</td>
                <td className="px-6 py-4 text-sm text-white font-medium">${inv.amount.toLocaleString()}</td>
                <td className="px-6 py-4"><span className={`text-xs px-2 py-1 rounded-full capitalize ${statusColors[inv.status]}`}>{inv.status}</span></td>
                <td className="px-6 py-4 text-sm text-white/40">{inv.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';

const payments = [
  { id: 'PAY-001', invoice: 'INV-0042', client: 'Acme Corp', amount: 15000, method: 'Stripe', date: 'Jan 15, 2024' },
  { id: 'PAY-002', invoice: 'INV-0038', client: 'GlobalCo', amount: 22000, method: 'Wire Transfer', date: 'Dec 20, 2023' },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Payments</h1>
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead><tr className="border-b border-white/5">
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">ID</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Invoice</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Client</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Amount</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Method</th>
            <th className="text-left text-xs text-white/40 font-medium px-6 py-4 uppercase">Date</th>
          </tr></thead>
          <tbody>
            {payments.map(p => (
              <tr key={p.id} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                <td className="px-6 py-4 text-sm text-white font-mono">{p.id}</td>
                <td className="px-6 py-4 text-sm text-white/60">{p.invoice}</td>
                <td className="px-6 py-4 text-sm text-white/70">{p.client}</td>
                <td className="px-6 py-4 text-sm text-green-400 font-medium">${p.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-white/50">{p.method}</td>
                <td className="px-6 py-4 text-sm text-white/40">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
